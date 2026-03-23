"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap-register";
import { usePrefersReducedMotion } from "@/lib/motion/use-prefers-reduced-motion";

type GsapRevealProps = {
  children: ReactNode;
  className?: string;
  /** ScrollTrigger start, e.g. "top 85%" */
  start?: string;
  y?: number;
  duration?: number;
};

/**
 * Scroll-driven fade/slide-in using GSAP + ScrollTrigger (pairs with Lenis via LenisGsapScrollSync).
 */
export function GsapReveal({
  children,
  className,
  start = "top 88%",
  y = 28,
  duration = 0.65,
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power2.out",
          /**
           * Default is immediateRender: true — applies "from" before ScrollTrigger runs,
           * so content stays invisible if the trigger hasn’t fired yet (hero / Lenis timing).
           */
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            invalidateOnRefresh: true,
          },
        },
      );
    }, el);

    const refreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(refreshId);
      ctx.revert();
    };
  }, [reduced, start, y, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
