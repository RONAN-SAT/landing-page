"use client";

import { forwardRef, useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";

type LoaderProps = {
  progressRef: RefObject<number>;
  ready: boolean;
  total: number;
};

const HallOfFameLoader = forwardRef<HTMLDivElement, LoaderProps>(
  function HallOfFameLoader({ progressRef, ready, total }, ref) {
    const contentRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const countRef = useRef<HTMLSpanElement>(null);
    const percentRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".hof-loader-line span",
          { yPercent: 120 },
          { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.1, delay: 0.15 }
        );
        gsap.fromTo(
          ".hof-loader-eyebrow",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.1 }
        );
        gsap.fromTo(".hof-loader-foot", { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.5 });
        gsap.to(".hof-loader-star", { rotation: 180, duration: 2.4, ease: "none", repeat: -1 });
      }, contentRef);
      return () => ctx.revert();
    }, []);

    useEffect(() => {
      let raf = 0;
      let shown = 0;
      const tick = () => {
        const target = ready ? 100 : (progressRef.current ?? 0) * 100;
        shown += (target - shown) * 0.12;
        if (target - shown < 0.1) shown = target;
        const pct = Math.round(shown);
        if (barRef.current) barRef.current.style.width = shown + "%";
        if (percentRef.current) percentRef.current.textContent = String(pct).padStart(3, "0");
        if (countRef.current) {
          countRef.current.textContent = String(
            Math.min(total, Math.round((shown / 100) * total))
          ).padStart(2, "0");
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [ready, total, progressRef]);

    return (
      <div
        ref={ref}
        className="fixed inset-0 z-[100] bg-[#f4efe6] bg-dot-pattern overflow-hidden"
        style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      >
        <div
          ref={contentRef}
          className="hof-loader-content absolute inset-0 flex flex-col justify-between px-6 py-8 md:px-12 md:py-10"
        >
          <div className="flex items-center justify-between">
            <p className="hof-loader-eyebrow font-bold text-xs md:text-sm uppercase tracking-[0.3em]">
              Ronan SAT presents
            </p>
            <p className="hof-loader-eyebrow font-bold text-xs md:text-sm uppercase tracking-[0.3em]">
              Est. 2023 — Da Nang
            </p>
          </div>

          <div className="relative select-none">
            <span
              aria-hidden
              className="absolute -top-6 right-0 font-display font-black text-[26vw] md:text-[18vw] leading-none text-outline opacity-20 pointer-events-none"
            >
              HOF
            </span>
            <h1 className="font-display font-black uppercase leading-[0.85] tracking-tight text-[17vw] md:text-[11vw]">
              <span className="hof-loader-line block overflow-hidden">
                <span className="block">Hall</span>
              </span>
              <span className="hof-loader-line block overflow-hidden">
                <span className="block text-outline">of</span>
              </span>
              <span className="hof-loader-line block overflow-hidden">
                <span className="block">
                  Fame<span className="text-[#BCCE75]">.</span>
                </span>
              </span>
            </h1>
          </div>

          <div className="hof-loader-foot w-full max-w-3xl mx-auto">
            <div className="flex items-end justify-between mb-3">
              <p className="font-bold text-xs md:text-sm uppercase tracking-[0.25em]">
                Mounting the covers
                <span className="mx-2 text-[#0f0e0e]/40">·</span>
                <span ref={countRef}>00</span>
                <span className="text-[#0f0e0e]/40"> / {String(total).padStart(2, "0")}</span>
              </p>
              <p className="font-display font-black text-4xl md:text-6xl tabular-nums leading-none">
                <span ref={percentRef}>000</span>
                <span className="text-lg md:text-2xl align-top">%</span>
              </p>
            </div>
            <div className="h-3 w-full bg-white border-2 border-[#0f0e0e] rounded-full overflow-hidden">
              <div
                ref={barRef}
                className="hof-loader-bar h-full bg-[#BCCE75] border-r-2 border-[#0f0e0e]"
                style={{ width: "0%" }}
              />
            </div>
            <p className="mt-3 text-[11px] md:text-xs font-medium text-[#0f0e0e]/50 uppercase tracking-[0.2em]">
              <span className="hof-loader-star inline-block">✦</span> Polishing trophies — every
              cover preloaded before the curtain lifts
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default HallOfFameLoader;
