import React from "react";

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

interface BadgeProps {
  children: React.ReactNode;
}

/** Version pill with Magic UI–style shimmer: https://magicui.design/docs/components/animated-shiny-text */
export const Badge: React.FC<BadgeProps> = ({ children }) => (
  <div
    className={cn(
      "group mb-8 inline-flex items-center justify-center rounded-full border border-black/5 bg-neutral-100/95 text-base shadow-sm backdrop-blur-sm transition-all ease-in",
      "dark:border-white/10 dark:bg-neutral-900/60",
      "hover:bg-neutral-200/90 dark:hover:bg-neutral-800/90",
    )}
  >
    <AnimatedShinyText
      shimmerWidth={120}
      className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[10px] font-mono font-normal tracking-wide normal-case transition ease-out hover:duration-300"
    >
      {children}
    </AnimatedShinyText>
  </div>
);
