"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, MousePointerClick } from "lucide-react";
import { hallOfFame } from "@/lib/hall-of-fame";
import type { EdgeColors, ImageMeta } from "./utils";

gsap.registerPlugin(ScrollTrigger);

type Pose = { x: number; y: number; scale: number; rotation: number; z: number };
type SlotRef = "stage" | number;

const STACK_ROT = [-6, 4, -3, 6, -5, 3, -7, 4];
const pad2 = (n: number) => String(n).padStart(2, "0");
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const fanWindow = (i: number): [number, number] => {
  if (i === 0) return [0.02, 0.5];
  const s = 0.16 + (i - 1) * 0.055;
  return [s, s + 0.36];
};

type Props = {
  active: boolean;
  colors: EdgeColors[];
  dims: ImageMeta[];
};

export default function HallOfFameExperience({ active, colors, dims }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const stageSlotRef = useRef<HTMLDivElement>(null);
  const burstRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const mastheadRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glareRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIdx, setActiveIdx] = useState(0);
  const activeRef = useRef(0);
  const colorsRef = useRef<EdgeColors[]>(colors);
  const introRef = useRef<gsap.core.Timeline | null>(null);
  const firstInfoRun = useRef(true);

  const aspectArr = useMemo(
    () =>
      hallOfFame.map((_, i) => {
        const d = dims[i];
        const a = d && d.w > 0 && d.h > 0 ? d.w / d.h : 0.8;
        return Math.min(1, Math.max(0.62, a));
      }),
    [dims]
  );
  const aspectsRef = useRef<number[]>(aspectArr);

  const engine = useRef({
    ready: false,
    reduced: false,
    introDone: false,
    f: 0,
    cardH: 0,
    cardWs: hallOfFame.map(() => 0) as number[],
    stageAnchor: { cx: 0, cy: 0 },
    gridRects: [] as ({ cx: number; cy: number; scale: number } | null)[],
    stackPoses: [] as Pose[],
    slots: ["stage", 1, 2, 3, 4, 5, 6, 7] as SlotRef[],
    swapping: new Set<number>(),
    st: null as ScrollTrigger | null | undefined,
  });

  const fProxy = useRef({ v: 0 });

  const sizeDressing = useCallback((i: number, duration: number) => {
    const e = engine.current;
    const cw = e.cardWs[i] ?? 0;
    const aura = auraRef.current;
    const burst = burstRef.current;
    if (!duration) {
      if (aura) gsap.set(aura, { width: cw + 130, height: e.cardH + 130, xPercent: -50, yPercent: -50 });
      if (burst) gsap.set(burst, { width: cw + 26, height: e.cardH + 26, xPercent: -50, yPercent: -50 });
    } else {
      if (aura) gsap.to(aura, { width: cw + 130, height: e.cardH + 130, duration, ease: "power3.inOut" });
      if (burst) gsap.to(burst, { width: cw + 26, height: e.cardH + 26, duration, ease: "power3.inOut" });
    }
  }, []);

  const poseFor = useCallback((i: number, slot: SlotRef): Pose => {
    const e = engine.current;
    const cw = e.cardWs[i] ?? 0;
    if (slot === "stage") {
      return { x: e.stageAnchor.cx - cw / 2, y: e.stageAnchor.cy - e.cardH / 2, scale: 1, rotation: 0, z: 40 };
    }
    const r = e.gridRects[slot as number];
    if (!r) return { x: 0, y: 0, scale: 0.2, rotation: 0, z: 10 };
    return { x: r.cx - cw / 2, y: r.cy - e.cardH / 2, scale: r.scale, rotation: 0, z: 10 };
  }, []);

  const measure = useCallback(() => {
    const e = engine.current;
    const deck = deckRef.current;
    const anchor = stageSlotRef.current;
    if (!deck || !anchor) return;
    const dr = deck.getBoundingClientRect();
    const ar = anchor.getBoundingClientRect();
    if (ar.height === 0) return;
    e.cardH = ar.height;
    e.cardWs = hallOfFame.map((_, i) => ar.height * (aspectsRef.current[i] ?? 0.8));
    e.stageAnchor = {
      cx: ar.left + ar.width / 2 - dr.left,
      cy: ar.top + ar.height / 2 - dr.top,
    };
    e.gridRects = slotRefs.current.map((el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        cx: r.left + r.width / 2 - dr.left,
        cy: r.top + r.height / 2 - dr.top,
        scale: r.height / e.cardH,
      };
    });
    const pileH = dr.height * 0.3;
    e.stackPoses = hallOfFame.map((_, i) => {
      const a = aspectsRef.current[i] ?? 0.8;
      const scale = (pileH / e.cardH) * Math.sqrt(0.8 / a);
      return {
        x: dr.width / 2 - e.cardWs[i] / 2 + i * 8 - 26,
        y: dr.height * 0.82 - e.cardH / 2 + i * 9 - 30,
        scale,
        rotation: STACK_ROT[i],
        z: 18 - i,
      };
    });
    cardRefs.current.forEach((el, i) => {
      if (el) gsap.set(el, { width: e.cardWs[i], height: e.cardH });
    });
    sizeDressing(activeRef.current, 0);
  }, [sizeDressing]);

  const applyPositions = useCallback(() => {
    const e = engine.current;
    if (!e.ready) return;
    cardRefs.current.forEach((el, i) => {
      if (!el || e.swapping.has(i)) return;
      const from = e.stackPoses[i];
      if (!from) return;
      const to = poseFor(i, e.slots[i]);
      const [s, en] = fanWindow(i);
      const t = smooth(clamp01((e.f - s) / (en - s)));
      gsap.set(el, {
        x: lerp(from.x, to.x, t),
        y: lerp(from.y, to.y, t) - Math.sin(t * Math.PI) * (26 + (i % 3) * 14),
        scale: lerp(from.scale, to.scale, t),
        rotation: lerp(from.rotation, to.rotation, t),
        zIndex: t >= 1 ? to.z : from.z,
      });
    });
  }, [poseFor]);

  useEffect(() => {
    aspectsRef.current = aspectArr;
    if (engine.current.ready) {
      measure();
      applyPositions();
    }
  }, [aspectArr, measure, applyPositions]);

  const swapTo = useCallback(
    (incoming: number) => {
      const e = engine.current;
      if (!e.ready || e.f < 1 || e.swapping.size > 0) return;
      const outgoing = activeRef.current;
      if (incoming === outgoing || e.slots[incoming] === "stage") return;
      const inEl = cardRefs.current[incoming];
      const outEl = cardRefs.current[outgoing];
      const inInner = innerRefs.current[incoming];
      const outInner = innerRefs.current[outgoing];
      if (!inEl || !outEl) return;

      const g = e.slots[incoming] as number;
      const toStage = poseFor(incoming, "stage");
      const toGrid = poseFor(outgoing, g);
      const inX = Number(gsap.getProperty(inEl, "x"));
      const inY = Number(gsap.getProperty(inEl, "y"));
      const inS = Number(gsap.getProperty(inEl, "scale"));
      const outX = Number(gsap.getProperty(outEl, "x"));
      const outY = Number(gsap.getProperty(outEl, "y"));
      const outS = Number(gsap.getProperty(outEl, "scale"));

      e.swapping.add(incoming);
      e.swapping.add(outgoing);
      e.slots[incoming] = "stage";
      e.slots[outgoing] = g;
      activeRef.current = incoming;
      gsap.set(inEl, { zIndex: 60 });
      gsap.set(outEl, { zIndex: 55 });

      const lift = Math.min(130, window.innerHeight * 0.13);
      const tl = gsap.timeline({
        onComplete: () => {
          e.swapping.delete(incoming);
          e.swapping.delete(outgoing);
          gsap.set(inEl, { zIndex: 40 });
          gsap.set(outEl, { zIndex: 10 });
          applyPositions();
        },
      });

      tl.to(inEl, {
        x: lerp(inX, toStage.x, 0.5),
        y: Math.min(inY, toStage.y) - lift,
        scale: Math.max(inS, 0.72),
        duration: 0.42,
        ease: "power2.in",
      }, 0)
        .to(inEl, { x: toStage.x, y: toStage.y, scale: 1, duration: 0.5, ease: "power2.out" }, 0.42)
        .to(outEl, {
          x: lerp(outX, toGrid.x, 0.5),
          y: Math.min(outY, toGrid.y) - lift * 0.5,
          scale: Math.min(outS, 0.62),
          duration: 0.4,
          ease: "power2.in",
        }, 0.08)
        .to(outEl, { x: toGrid.x, y: toGrid.y, scale: toGrid.scale, duration: 0.48, ease: "power2.out" }, 0.48);

      sizeDressing(incoming, 0.85);

      if (inInner) {
        gsap.fromTo(inInner, { rotation: 0 }, {
          keyframes: [{ rotation: 7, duration: 0.32 }, { rotation: -3, duration: 0.32 }, { rotation: 0, duration: 0.28 }],
          ease: "sine.inOut",
        });
      }
      if (outInner) {
        gsap.fromTo(outInner, { rotation: 0 }, {
          keyframes: [{ rotation: -6, duration: 0.32 }, { rotation: 3, duration: 0.32 }, { rotation: 0, duration: 0.28 }],
          ease: "sine.inOut",
        });
      }

      const cols = colorsRef.current[incoming];
      if (cols && rootRef.current) {
        gsap.to(rootRef.current, {
          "--glow-a": cols.primary,
          "--glow-b": cols.secondary,
          duration: 0.9,
          ease: "power2.out",
        });
      }

      tl.to(infoRef.current?.querySelectorAll("[data-line]") ?? [], {
        y: -26,
        opacity: 0,
        stagger: 0.025,
        duration: 0.22,
        ease: "power2.in",
      }, 0.22);
      tl.call(() => setActiveIdx(incoming), [], 0.52);

      if (burstRef.current) {
        gsap.fromTo(burstRef.current, { scale: 0.72, opacity: 0.9 }, {
          scale: 1.28,
          opacity: 0,
          duration: 0.85,
          ease: "power2.out",
        });
      }
    },
    [applyPositions, poseFor, sizeDressing]
  );

  useEffect(() => {
    colorsRef.current = colors;
    if (colors.length && rootRef.current) {
      const c = colors[activeRef.current];
      gsap.to(rootRef.current, {
        "--glow-a": c.primary,
        "--glow-b": c.secondary,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [colors]);

  useEffect(() => {
    const e = engine.current;
    e.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    measure();
    e.ready = true;
    applyPositions();

    const floats: gsap.core.Tween[] = [];
    if (!e.reduced) {
      innerRefs.current.forEach((el, i) => {
        if (!el) return;
        floats.push(
          gsap.to(el, { y: "+=7", duration: 2.6 + i * 0.17, ease: "sine.inOut", yoyo: true, repeat: -1 })
        );
      });
    }

    const remeasure = () => {
      measure();
      applyPositions();
    };
    const ro = new ResizeObserver(() => {
      remeasure();
      engine.current.st?.refresh();
    });
    if (rootRef.current) ro.observe(rootRef.current);
    document.fonts?.ready.then(remeasure).catch(() => undefined);

    return () => {
      ro.disconnect();
      floats.forEach((t) => t.kill());
      e.st?.kill();
      e.ready = false;
    };
  }, [measure, applyPositions]);

  useEffect(() => {
    if (!active || introRef.current) return;
    const e = engine.current;
    const root = rootRef.current;
    if (!root) return;

    if (e.reduced) {
      e.f = 1;
      fProxy.current.v = 1;
      e.introDone = true;
      cardRefs.current.forEach((el) => el && gsap.set(el, { opacity: 1 }));
      gsap.set([infoRef.current, controlsRef.current, mastheadRef.current], { opacity: 1 });
      gsap.set(heroRef.current, { opacity: 0 });
      gsap.set(hintRef.current, { opacity: 0 });
      return;
    }

    const vh = window.innerHeight;
    const fp = fProxy.current;
    const tween = gsap.to(fp, {
      v: 1,
      ease: "none",
      onUpdate: () => {
        if (!e.introDone) return;
        e.f = clamp01(fp.v / 0.45);
        applyPositions();
      },
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top",
        end: "+=170%",
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (!e.introDone) return;
          const p = self.progress;
          gsap.set(heroRef.current, { opacity: 1 - clamp01(p / 0.22), scale: 1 - clamp01(p / 0.22) * 0.06 });
          gsap.set(hintRef.current, { opacity: 1 - clamp01(p / 0.1) });
          gsap.set(mastheadRef.current, { opacity: clamp01((p - 0.14) / 0.16), y: (1 - clamp01((p - 0.14) / 0.16)) * -14 });
          gsap.set(infoRef.current, { opacity: clamp01((p - 0.3) / 0.14), y: (1 - clamp01((p - 0.3) / 0.14)) * 24 });
          gsap.set(controlsRef.current, { opacity: clamp01((p - 0.4) / 0.1) });
          if (auraRef.current) {
            gsap.set(auraRef.current, { opacity: clamp01((p - 0.15) / 0.2) * (0.42 + Math.sin(p * Math.PI * 5) * 0.14) });
          }
        },
      },
    });
    e.st = tween.scrollTrigger;

    const tl = gsap.timeline({
      onComplete: () => {
        e.introDone = true;
      },
    });
    introRef.current = tl;

    tl.fromTo(cardRefs.current, {
      y: (i: number) => (e.stackPoses[i]?.y ?? 0) + vh * 0.55,
      rotation: (i: number) => (e.stackPoses[i]?.rotation ?? 0) * 2.4,
      opacity: 0,
    }, {
      y: (i: number) => e.stackPoses[i]?.y ?? 0,
      rotation: (i: number) => e.stackPoses[i]?.rotation ?? 0,
      opacity: 1,
      duration: 1.15,
      ease: "power3.out",
      stagger: 0.085,
    }, 0.05)
      .fromTo(".hof-hero-line span", { yPercent: 120 }, { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.09 }, 0.2)
      .fromTo(".hof-hero-eyebrow, .hof-hero-sub", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, 0.55)
      .fromTo(".hof-ticker", { yPercent: 100 }, { yPercent: 0, duration: 0.6, ease: "power3.out" }, 0.65)
      .fromTo(hintRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1);

    return () => {
      tl.kill();
      introRef.current = null;
    };
  }, [active, applyPositions]);

  useEffect(() => {
    if (firstInfoRun.current) {
      firstInfoRun.current = false;
      return;
    }
    const lines = infoRef.current?.querySelectorAll("[data-line]");
    if (!lines?.length) return;
    gsap.fromTo(lines, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.055, duration: 0.55, ease: "power3.out" });
  }, [activeIdx]);

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (!engine.current.ready || engine.current.f < 1) return;
      if (ev.key === "ArrowRight") swapTo((activeRef.current + 1) % hallOfFame.length);
      if (ev.key === "ArrowLeft") swapTo((activeRef.current - 1 + hallOfFame.length) % hallOfFame.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [swapTo]);

  const onCardMove = (i: number) => (ev: ReactPointerEvent<HTMLDivElement>) => {
    const e = engine.current;
    if (e.reduced || e.slots[i] !== "stage") return;
    const el = innerRefs.current[i];
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (ev.clientX - r.left) / r.width - 0.5;
    const py = (ev.clientY - r.top) / r.height - 0.5;
    gsap.to(el, { rotationY: px * 10, rotationX: -py * 8, duration: 0.4, ease: "power2.out", overwrite: "auto" });
    const glare = glareRefs.current[i];
    if (glare) gsap.to(glare, { opacity: 0.3, x: `${px * 60}%`, y: `${py * 60}%`, duration: 0.4, ease: "power2.out" });
  };

  const onCardEnter = (i: number) => () => {
    const e = engine.current;
    if (e.reduced || e.f < 1 || e.slots[i] === "stage" || e.swapping.size) return;
    const el = innerRefs.current[i];
    if (el) gsap.to(el, { scale: 1.07, duration: 0.35, ease: "power2.out" });
  };

  const onCardLeave = (i: number) => () => {
    const el = innerRefs.current[i];
    if (!el) return;
    if (engine.current.slots[i] === "stage") {
      gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.7, ease: "power3.out" });
      const glare = glareRefs.current[i];
      if (glare) gsap.to(glare, { opacity: 0, duration: 0.5 });
    } else {
      gsap.to(el, { scale: 1, duration: 0.4, ease: "power2.out" });
    }
  };

  const onCardClick = (i: number) => () => {
    const e = engine.current;
    if (e.f < 1 || e.swapping.size) return;
    if (e.slots[i] === "stage") swapTo((activeRef.current + 1) % hallOfFame.length);
    else swapTo(i);
  };

  const entry = hallOfFame[activeIdx];
  const tickerItems = hallOfFame.map((m) => `${m.score} — ${m.name.toUpperCase()}`);

  return (
    <div
      ref={rootRef}
      className="relative bg-[#f4efe6]"
      style={{ "--glow-a": "#BCCE75", "--glow-b": "#FBDAE3" } as CSSProperties}
    >
      <section ref={pinRef} className="relative h-svh overflow-hidden bg-dot-pattern">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center md:justify-end md:pr-[3vw]">
          <span className="hof-bignum select-none font-display font-black leading-none text-outline opacity-10 text-[46vw] md:text-[30vw]">
            {pad2(activeIdx + 1)}
          </span>
        </div>

        <div ref={mastheadRef} className="absolute left-5 top-24 z-40 opacity-0 md:left-10 md:top-28 md:block hidden">
          <p className="font-display font-black uppercase leading-none text-lg md:text-xl">
            Hall of Fame<span className="text-[#BCCE75]">.</span>
          </p>
          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.3em] text-[#0f0e0e]/50 md:text-[10px]">
            Ronan SAT — 2026 Collection
          </p>
        </div>

        <div ref={heroRef} className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <p className="hof-hero-eyebrow mb-4 border-2 border-[#0f0e0e] bg-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] brutal-shadow-sm md:text-xs">
            Ronan SAT ✦ 2026 Collection
          </p>
          <h2 className="font-display font-black uppercase leading-[0.85] tracking-tight text-[17vw] md:text-[10vw]">
            <span className="hof-hero-line block overflow-hidden">
              <span className="block">Hall</span>
            </span>
            <span className="hof-hero-line block overflow-hidden">
              <span className="block">
                of <span className="text-outline">Fame</span>
              </span>
            </span>
          </h2>
          <div ref={hintRef} className="mt-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f0e0e]/60 opacity-0 md:text-xs">
            Scroll to unfold
            <ChevronRight className="h-4 w-4 rotate-90" />
          </div>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center gap-2 px-4 pb-20 pt-20 md:flex-row md:gap-8 md:px-10 md:pb-16 md:pt-28">
          <div className="order-3 grid w-full shrink-0 grid-cols-4 gap-2 md:order-1 md:w-[16rem] md:grid-cols-2 md:gap-3">
            {hallOfFame.map((m, i) => (
              <div
                key={m.slug}
                className="flex h-14 w-full items-center justify-center md:h-24 lg:h-28"
              >
                <div
                  ref={(el) => {
                    slotRefs.current[i] = el;
                  }}
                  className="h-full"
                  style={{ aspectRatio: String(aspectArr[i]) }}
                />
              </div>
            ))}
          </div>

          <div ref={infoRef} className="relative order-2 max-w-md flex-1 text-center opacity-0 md:order-2 md:text-left">
            <p data-line className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#0f0e0e]/50 md:text-xs">
              Inductee № {pad2(activeIdx + 1)}
            </p>
            <h3 data-line className="mt-2 font-display font-black leading-[0.95] text-3xl md:text-5xl">
              {entry.name}
            </h3>
            <div data-line className="mt-3 flex items-baseline justify-center gap-3 md:justify-start">
              <span
                className="font-display font-black leading-none text-5xl md:text-7xl"
                style={{ backgroundImage: "linear-gradient(transparent 62%, var(--glow-a) 62%)", backgroundSize: "100% 100%" }}
              >
                {entry.score}
              </span>
              <span className="rounded-full border-2 border-[#0f0e0e] bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                SAT
              </span>
            </div>
            <p data-line className="mt-3 text-sm font-semibold md:text-base">
              {entry.detail}
            </p>
            <div data-line className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              <span className="rounded-full border-2 border-[#0f0e0e] bg-[#FBDAE3] px-3 py-1 text-[11px] font-bold">
                {entry.school}
              </span>
              <span className="rounded-full border-2 border-[#0f0e0e] bg-[#DBE8FB] px-3 py-1 text-[11px] font-bold">
                {entry.date}
              </span>
            </div>
          </div>

          <div className="relative order-1 shrink-0 md:order-3">
            <div ref={stageSlotRef} className="relative aspect-square h-[38vh] md:h-[60vh] lg:h-[64vh]">
              <div
                ref={auraRef}
                className="pointer-events-none absolute left-0 top-0 rounded-full opacity-50 blur-2xl"
                style={{
                  background:
                    "radial-gradient(60% 60% at 30% 30%, var(--glow-b) 0%, transparent 70%), radial-gradient(55% 55% at 72% 74%, var(--glow-a) 0%, transparent 72%)",
                }}
              />
              <div
                ref={burstRef}
                className="pointer-events-none absolute left-0 top-0 rounded-[2rem] border-[3px] opacity-0"
                style={{ borderColor: "var(--glow-a)" }}
              />
            </div>
          </div>
        </div>

        <div ref={deckRef} className="pointer-events-none absolute inset-0 z-30">
          {hallOfFame.map((m, i) => (
            <article
              key={m.slug}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute left-0 top-0 will-change-transform"
              style={{ opacity: 0, perspective: "900px" }}
            >
              <div
                ref={(el) => {
                  innerRefs.current[i] = el;
                }}
                onPointerMove={onCardMove(i)}
                onPointerEnter={onCardEnter(i)}
                onPointerLeave={onCardLeave(i)}
                onClick={onCardClick(i)}
                className="pointer-events-auto relative h-full w-full cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  ref={(el) => {
                    frameRefs.current[i] = el;
                  }}
                  className={`relative h-full w-full overflow-hidden rounded-xl border-2 border-[#0f0e0e] bg-white transition-[box-shadow] duration-500 md:rounded-2xl md:border-[3px] ${
                    i === activeIdx ? "" : "brutal-shadow-sm"
                  }`}
                  style={
                    i === activeIdx
                      ? { boxShadow: "0 0 70px -8px var(--glow-a), 0 30px 90px -20px var(--glow-b), 10px 10px 0 #0f0e0e" }
                      : undefined
                  }
                >
                  <img
                    src={m.src}
                    alt={`${m.name} — SAT ${m.score}`}
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    ref={(el) => {
                      glareRefs.current[i] = el;
                    }}
                    className="pointer-events-none absolute inset-0 opacity-0"
                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.75), transparent 60%)" }}
                  />
                  <div className="absolute left-2 top-2 rounded-full border border-[#f4efe6]/40 bg-[#0f0e0e] px-2 py-0.5 text-[9px] font-bold text-[#f4efe6] md:left-3 md:top-3 md:text-[10px]">
                    {pad2(i + 1)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div ref={controlsRef} className="absolute bottom-12 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0 md:bottom-20 md:left-auto md:right-10 md:translate-x-0 md:items-end">
          <p className="hidden items-center gap-1.5 rounded-full border-2 border-[#0f0e0e] bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] brutal-shadow-sm md:flex md:text-[10px]">
            <MousePointerClick className="h-3.5 w-3.5" />
            Tap a cover to swap
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous inductee"
              onClick={() => swapTo((activeRef.current - 1 + hallOfFame.length) % hallOfFame.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0f0e0e] bg-white transition-transform hover:-translate-x-0.5 active:translate-y-0.5 active:shadow-none brutal-shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next inductee"
              onClick={() => swapTo((activeRef.current + 1) % hallOfFame.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0f0e0e] bg-[#BCCE75] transition-transform hover:translate-x-0.5 active:translate-y-0.5 active:shadow-none brutal-shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="hof-ticker absolute inset-x-0 bottom-0 z-40 border-t-2 border-[#0f0e0e] bg-[#0f0e0e] py-2 text-[#f4efe6]">
          <div className="marquee-container">
            <div className="marquee-content" style={{ animationDuration: "30s" }}>
              {[0, 1].map((half) => (
                <div key={half} className="flex shrink-0 items-center gap-8 pr-8">
                  {tickerItems.map((t) => (
                    <span key={`${half}-${t}`} className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.25em] md:text-xs">
                      {t} <span className="mx-2 text-[#BCCE75]">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f0e0e] px-6 py-20 text-[#f4efe6] md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#BCCE75]">
              Next inductee — maybe you
            </p>
            <h3 className="mt-3 font-display font-black uppercase leading-[0.9] text-4xl md:text-6xl">
              Your cover
              <br />
              belongs here<span className="text-[#BCCE75]">.</span>
            </h3>
            <p className="mt-4 max-w-md font-medium text-white/60">
              Every cover on this wall started with one decision: study properly. Join the next
              intensive class and break your own ceiling.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <a
              href="https://learn.ronansat.com/auth"
              className="rounded-full border-2 border-[#f4efe6] bg-[#BCCE75] px-7 py-3.5 text-center font-bold text-[#0f0e0e] transition-transform hover:scale-105"
              style={{ boxShadow: "5px 5px 0 #f4efe6" }}
            >
              Start free
            </a>
            <Link
              href="/classes"
              className="rounded-full border-2 border-white/40 px-7 py-3.5 text-center font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              See classes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
