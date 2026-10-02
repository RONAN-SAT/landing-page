/**
 * Warm-up for the learn subdomain's Cloudflare Worker.
 *
 * The app at learn.ronansat.com is one large OpenNext Worker. A request that
 * lands on a cold isolate pays its full startup cost first — measured at
 * 2-4s TTFB from Vietnam (vs ~0.6s warm). The landing page's "Log in" /
 * "Start Free" buttons navigate there, so the student feels that cold start
 * as "the login button is slow".
 *
 * The fix: fire a cheap no-cors request the moment the visitor SHOWS INTENT
 * (hover/focus on a login entry point). By the time the click lands, the
 * isolate is usually warm, so the navigation itself starts instantly.
 *
 * - `no-cors` mode: we cannot read the response and don't need to. The goal
 *   is only to make Cloudflare boot the Worker; the browser caching an
 *   opaque response for /auth is harmless (it is not used for navigation).
 * - GET, not HEAD: the navigation will be a GET, and some CDN/Worker caches
 *   key by method — warming with the exact shape the click produces.
 *
 * TWO DEDUP LAYERS, on purpose:
 *
 * 1. In-memory (`warmupStarted`): one request per page load. Repeated hovers
 *    across the many login entry points must not re-fire it — the isolate is
 *    either warm or the request is already in flight.
 * 2. `sessionStorage`: one request per TAB SESSION. Cloudflare keeps a warmed
 *    isolate alive for a while (minutes), so a visitor who hovers a login
 *    button, wanders off, closes the tab and comes back later — or browses
 *    through several landing pages — does not need a second warm-up while the
 *    previous one is still doing its job. sessionStorage (not localStorage)
 *   on purpose: a NEW browser session is exactly when the old isolate may
 *   have been evicted, so a fresh session should warm again.
 *
 * - `keepalive: false` on purpose: this is a low-priority hint, not data
 *   that must survive the click's navigation away from the page.
 * - Best-effort by contract: a blocked request, an offline device, a
 *   locked-down storage or an ad-blocker must never surface an error. Every
 *   failure path (including the storage read/write) degrades to the
 *   in-memory layer only.
 */

const LEARN_AUTH_URL = "https://learn.ronansat.com/auth";
const WARMUP_STORAGE_KEY = "ronansat:learn-auth-warmed";

let warmupStarted = false;

function warmupAlreadyRecordedThisSession(): boolean {
  try {
    return window.sessionStorage.getItem(WARMUP_STORAGE_KEY) === "1";
  } catch {
    // Private mode / storage disabled / SSR guard — treat as "not warmed".
    return false;
  }
}

function recordWarmupInSession(): void {
  try {
    window.sessionStorage.setItem(WARMUP_STORAGE_KEY, "1");
  } catch {
    // Storage full or blocked — the in-memory flag still dedups this page.
  }
}

export function warmLearnAuth(): void {
  if (typeof window === "undefined") {
    return;
  }

  if (warmupStarted || warmupAlreadyRecordedThisSession()) {
    return;
  }

  warmupStarted = true;
  recordWarmupInSession();

  try {
    void fetch(LEARN_AUTH_URL, { mode: "no-cors", credentials: "omit" }).catch(
      () => undefined
    );
  } catch {
    // Some browsers throw synchronously on fetch with unexpected options —
    // the hint is not worth an error surface either way.
  }
}
