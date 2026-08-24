"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HallOfFameLoader from "./Loader";
import HallOfFameExperience from "./Experience";
import { hallOfFame } from "@/lib/hall-of-fame";
import { extractEdgeColors, preloadImages, type EdgeColors, type ImageMeta } from "./utils";

export default function HallOfFame() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [assetsReady, setAssetsReady] = useState(false);
  const [colors, setColors] = useState<EdgeColors[]>([]);
  const [dims, setDims] = useState<ImageMeta[]>([]);
  const [loaderGone, setLoaderGone] = useState(false);
  const [expActive, setExpActive] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (unlocked) {
      root.style.overflow = "";
      root.style.paddingRight = "";
      return;
    }
    const sbw = window.innerWidth - root.clientWidth;
    if (sbw > 0) root.style.paddingRight = `${sbw}px`;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
      root.style.paddingRight = "";
    };
  }, [unlocked]);

  useEffect(() => {
    const minWait = new Promise((r) => setTimeout(r, 1500));
    let cancelled = false;

    preloadImages(
      hallOfFame.map((m) => m.src),
      (loaded, total) => {
        progressRef.current = loaded / total;
      }
    ).then(async (metas) => {
      if (cancelled) return;
      setDims(metas);
      const cols = await Promise.all(hallOfFame.map((m) => extractEdgeColors(m.src)));
      if (cancelled) return;
      progressRef.current = 1;
      setColors(cols);
      setAssetsReady(true);
      await minWait;
      if (cancelled) return;
      setExpActive(true);
      setUnlocked(true);
      const overlay = loaderRef.current;
      if (overlay) {
        await gsap
          .to(overlay, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.95, ease: "power4.inOut" })
          .then();
      }
      if (cancelled) return;
      setLoaderGone(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative">
      <HallOfFameExperience active={expActive} colors={colors} dims={dims} />
      {!loaderGone && (
        <HallOfFameLoader ref={loaderRef} progressRef={progressRef} ready={assetsReady} total={hallOfFame.length} />
      )}
    </div>
  );
}
