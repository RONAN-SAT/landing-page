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
 * - One-shot per page: once a warm request has been issued, repeated hovers
 *   must not re-fire it (the isolate is either warm or the request is
 *   already in flight).
 * - `keepalive: false` on purpose: this is a low-priority hint, not data
 *   that must survive the click's navigation away from the page.
 */

const LEARN_AUTH_URL = "https://learn.ronansat.com/auth";

let warmupStarted = false;

export function warmLearnAuth(): void {
  if (warmupStarted || typeof window === "undefined") {
    return;
  }

  warmupStarted = true;

  try {
    void fetch(LEARN_AUTH_URL, { mode: "no-cors", credentials: "omit" }).catch(
      // Best-effort by contract: a blocked request, an offline device or an
      // ad-blocker must never surface an unhandled rejection for a hint.
      () => undefined
    );
  } catch {
    // Some browsers throw synchronously on fetch with unexpected options —
    // the hint is not worth an error surface either way.
  }
}
