"use client";

import type { ReactNode } from "react";
import { Lenis as ReactLenis } from "lenis/react";
import { usePrefersReducedMotion } from "@/lib/motion/use-prefers-reduced-motion";
import { hyperkitLenisOptions } from "@/lib/motion/lenis-config";
import { LenisGsapScrollSync } from "@/components/motion/scroll-trigger-bridge";

type Props = { children: ReactNode };

/**
 * Global smooth scroll for the app using `lenis/react` with Hyperkit-tuned options.
 * When `prefers-reduced-motion: reduce`, Lenis is skipped and native scrolling is used.
 *
 * GSAP ScrollTrigger is synced via {@link LenisGsapScrollSync} using the official pattern
 * (`autoRaf: false` + `gsap.ticker` driving `lenis.raf`).
 *
 * @see https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md
 * @see https://www.ui-layouts.com/components/smooth-scroll
 */
export function LenisShell({ children }: Props) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={hyperkitLenisOptions}>
      <LenisGsapScrollSync />
      {children}
    </ReactLenis>
  );
}
