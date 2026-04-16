"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

import { tokens } from "@/lib/design-tokens";

const MagicRings = dynamic(() => import("@/components/MagicRings"), {
  ssr: false,
  loading: () => null,
});

/** Colored abstract mark (centered over rings) */
const ABSTRACT_LOGO_SRC = "/logo/brand/hyperkit/Hyperkit%20Abstract.svg";

/** Ring gradient  -  primary violet + cyan, aligned with accent palette */
const RING_PRIMARY = tokens.color.accent.primary;
const RING_SECONDARY = tokens.color.accent.cyan;

export const NetworkVisual: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      className="w-full max-w-md mx-auto relative overflow-hidden rounded-2xl border border-white/10"
      style={{
        aspectRatio: "1 / 1",
        backgroundColor: tokens.color.background.surface,
      }}
    >
      <div
        className="absolute inset-0 z-0 min-h-0 min-w-0 h-full w-full flex items-center justify-center"
        aria-hidden
      >
        <div className="h-[68%] w-[68%] min-h-0 min-w-0 max-h-full max-w-full">
          <MagicRings
            color={RING_PRIMARY}
            colorTwo={RING_SECONDARY}
            ringCount={5}
            speed={reducedMotion ? 0.06 : 1}
            attenuation={10}
            lineThickness={1.65}
            baseRadius={0.2}
            radiusStep={0.072}
            scaleRate={0.085}
            opacity={0.92}
            blur={0}
            noiseAmount={0.08}
            rotation={0}
            ringGap={1.45}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            mouseInfluence={0.2}
            hoverScale={1.2}
            parallax={0.05}
            clickBurst={false}
          />
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none p-[10%]">
        <Image
          src={ABSTRACT_LOGO_SRC}
          alt="Hyperkit"
          width={280}
          height={280}
          className="w-full max-w-[min(280px,72%)] h-auto object-contain drop-shadow-[0_0_32px_rgba(124,58,237,0.35)]"
          priority
        />
      </div>
    </div>
  );
};
