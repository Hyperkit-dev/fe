import type { ComponentPropsWithoutRef, CSSProperties, FC } from "react";

import { cn } from "@/lib/utils";

/** Magic UI–style shimmer: see https://magicui.design/docs/components/animated-shiny-text */
export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  style,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
          backgroundSize: `${shimmerWidth}px 100%`,
          ...style,
        } as CSSProperties
      }
      className={cn(
        "inline-block bg-clip-text text-transparent bg-no-repeat",
        "bg-gradient-to-r from-transparent via-neutral-800/85 via-[50%] to-transparent",
        "dark:via-white/80",
        "[background-position:0_0]",
        "[transition:background-position_1s_cubic-bezier(0.6,0.6,0,1)_infinite]",
        "animate-shiny-text",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
