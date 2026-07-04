"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Counts from 0 to `target` once the returned ref enters the viewport.
 * With prefers-reduced-motion the target is shown immediately, no animation.
 */
export function useCountUp(target: number, durationMs = 1800) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    if (!inView || reducedMotion) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimated(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, durationMs, reducedMotion]);

  const value = reducedMotion ? target : animated;
  return { ref, value };
}
