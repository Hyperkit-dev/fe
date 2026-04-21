"use client";

import type { FC } from "react";
import { TerminalContent } from "@/components/pages/landing-terminal-content";
import { TerminalHeader } from "@/components/pages/landing-terminal-header";
import { TerminalSidebar } from "@/components/pages/landing-terminal-sidebar";

/**
 * Bottom-anchored gradient wash behind the terminal (replaces WebGL laser beam).
 */
export const TerminalWindow: FC = () => {
  return (
    <div className="relative w-full min-w-0 max-w-full overflow-hidden">
      <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100/90 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-[#0A0910]/90 dark:shadow-2xl">
        <div
          className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-end overflow-hidden rounded-xl"
          aria-hidden
        >
          <div
            className="h-[min(88%,440px)] min-h-[280px] w-full shrink-0 bg-gradient-to-t from-purple-600/45 via-fuchsia-500/25 to-transparent sm:min-h-[340px] md:min-h-[400px] dark:from-purple-600/50 dark:via-fuchsia-600/28 dark:to-transparent [mask-image:linear-gradient(to_top,black_60%,transparent_100%)]"
          />
        </div>

        {/* Terminal chrome above the backdrop */}
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
