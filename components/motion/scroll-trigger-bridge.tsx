"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "@/lib/motion/gsap-register";
import type Lenis from "lenis";

/**
 * Wire Lenis scroll position into ScrollTrigger so scrub/tween triggers match the smooth scroller.
 * Without this, ScrollTrigger can miss updates when Lenis drives scroll.
 */
function attachScrollerProxy(lenis: Lenis) {
  ScrollTrigger.scrollerProxy(window, {
    scrollTop(value) {
      if (arguments.length && typeof value === "number") {
        lenis.scrollTo(value, { immediate: true });
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });
}

/**
 * Official Lenis + GSAP ScrollTrigger wiring (from Lenis docs):
 * - `lenis.on("scroll", ScrollTrigger.update)`
 * - `lenis.raf(ms)` on each frame via `gsap.ticker` (requires `autoRaf: false` on ReactLenis)
 * - `gsap.ticker.lagSmoothing(0)` so scroll-linked animations stay tight
 * - `ScrollTrigger.scrollerProxy(window, …)` so triggers align with Lenis scroll
 *
 * @see https://github.com/darkroomengineering/lenis#setup  -  GSAP ScrollTrigger block
 * @see https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md  -  GSAP integration example
 */
export function LenisGsapScrollSync() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;
    const instance = lenis;

    function gsapRaf(time: number) {
      instance.raf(time * 1000);
    }

    attachScrollerProxy(instance);

    gsap.ticker.add(gsapRaf);
    gsap.ticker.lagSmoothing(0);

    instance.on("scroll", ScrollTrigger.update);

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize, { passive: true });

    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(gsapRaf);
      instance.off("scroll", ScrollTrigger.update);
      // GSAP docs: `null` removes the proxy; typings omit `null`.
      ScrollTrigger.scrollerProxy(window, null as never);
      ScrollTrigger.refresh();
    };
  }, [lenis]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
