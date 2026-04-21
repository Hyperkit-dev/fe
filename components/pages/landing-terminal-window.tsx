"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { TerminalContent } from "@/components/pages/landing-terminal-content";
import { TerminalHeader } from "@/components/pages/landing-terminal-header";
import { TerminalSidebar } from "@/components/pages/landing-terminal-sidebar";

const LaserFlow = dynamic(
  () => import("@/components/visual/LaserFlow").then((m) => m.LaserFlow),
  { ssr: false, loading: () => null },
);

type LaserBackdrop = "webgl" | "gradient";

function useTerminalLaserBackdrop(): LaserBackdrop {
  const [mode, setMode] = useState<LaserBackdrop>("gradient");

  useEffect(() => {
    const resolve = () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const narrowViewport = window.matchMedia("(max-width: 639px)").matches;
      setMode(reducedMotion || narrowViewport ? "gradient" : "webgl");
    };

    resolve();

    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqWidth = window.matchMedia("(max-width: 639px)");
    mqReduce.addEventListener("change", resolve);
    mqWidth.addEventListener("change", resolve);
    return () => {
      mqReduce.removeEventListener("change", resolve);
      mqWidth.removeEventListener("change", resolve);
    };
  }, []);

  return mode;
}

/**
 * Laser Flow: bottom-anchored so the beam reads as rising into the terminal (lower → upper).
 * - DOM: flex justify-end + tall inner canvas pins the WebGL viewport to the lower ~85% of the card.
 * - Shader: verticalBeamOffset shifts the beam focal point toward the bottom of that viewport;
 *   centered column + low mouse tilt keeps the column reading vertically.
 */
export const TerminalWindow: FC = () => {
  const backdrop = useTerminalLaserBackdrop();

  return (
    <div className="relative w-full min-w-0 max-w-full overflow-hidden">
      <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100/90 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-[#0A0910]/90 dark:shadow-2xl">
        {/* Laser / gradient: clipped to rounded-xl; column grows from bottom edge upward */}
        <div
          className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-end overflow-hidden rounded-xl"
          aria-hidden
        >
          {backdrop === "webgl" ? (
            <div
              className="relative w-full shrink-0 [mask-image:linear-gradient(to_top,black_55%,transparent_100%)]"
              style={{
                height: "min(88%, 440px)",
                minHeight: "clamp(220px, 52vh, 380px)",
              }}
            >
              <LaserFlow
                className="h-full w-full opacity-[0.48]"
                color="#c4b5fd"
                horizontalBeamOffset={0}
                verticalBeamOffset={0.48}
                verticalSizing={2.35}
                horizontalSizing={0.42}
                mouseTiltStrength={0}
                mouseSmoothTime={0}
                flowSpeed={0.36}
                wispSpeed={12}
                fogIntensity={0.36}
              />
            </div>
          ) : (
            <div
              className="h-[min(88%,440px)] min-h-[280px] w-full shrink-0 bg-gradient-to-t from-purple-600/45 via-fuchsia-500/25 to-transparent sm:min-h-[340px] md:min-h-[400px] dark:from-purple-600/50 dark:via-fuchsia-600/28 dark:to-transparent [mask-image:linear-gradient(to_top,black_60%,transparent_100%)]"
            />
          )}
        </div>

        {/* Terminal chrome above the laser layer */}
        <div className="relative z-10 flex min-h-0 flex-col">
          <div
            className="absolute left-0 right-0 top-0 z-20 h-px opacity-90"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in srgb, #8b5cf6 85%, transparent), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 z-[1] h-8 rounded-t-xl"
            style={{
              boxShadow: "inset 0 8px 24px -8px rgba(124,58,237,0.35)",
            }}
            aria-hidden
          />

          <TerminalHeader />

          <div className="flex min-h-[280px] rounded-b-xl bg-[#0c0b10]/96 text-slate-300 sm:min-h-[340px] md:min-h-[400px]">
            <TerminalSidebar />
            <TerminalContent />
          </div>
        </div>
      </div>
    </div>
  );
};
