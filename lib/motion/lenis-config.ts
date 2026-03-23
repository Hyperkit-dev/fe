import type { LenisOptions } from "lenis";

/**
 * Hyperkit Lenis defaults — tuned for marketing site + GSAP ScrollTrigger.
 *
 * @see https://github.com/darkroomengineering/lenis#setup — core options
 * @see https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md — GSAP + `autoRaf: false`
 * @see https://www.ui-layouts.com/components/smooth-scroll — product reference (Lenis-style smooth scroll)
 */
export const hyperkitLenisOptions: LenisOptions = {
  /** Required for official GSAP integration: RAF is driven by `gsap.ticker` in `LenisGsapScrollSync`. */
  autoRaf: false,
  lerp: 0.09,
  duration: 1.05,
  smoothWheel: true,
  wheelMultiplier: 0.95,
  touchMultiplier: 1.1,
  syncTouch: true,
  /** Hash / in-page links (e.g. `#section`) scroll smoothly; offset matches fixed nav via CSS scroll-margin where needed. */
  anchors: true,
  /** Smoother transitions when using Next.js client navigation. */
  stopInertiaOnNavigate: true,
};
