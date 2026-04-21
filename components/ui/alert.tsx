import type { ReactNode } from "react";
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from "lucide-react";

import { cn } from "@/lib/utils";

const variantClass: Record<
  "default" | "brand" | "gray" | "success" | "warning" | "error",
  string
> = {
  default:
    "border-slate-200/90 bg-slate-50 text-slate-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100",
  brand:
    "border-violet-500/30 bg-violet-500/[0.08] text-slate-800 dark:border-violet-500/35 dark:bg-violet-500/[0.1] dark:text-slate-100",
  gray:
    "border-slate-200/90 bg-slate-100/80 text-slate-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200",
  success:
    "border-emerald-500/30 bg-emerald-500/[0.08] text-slate-800 dark:border-emerald-500/35 dark:bg-emerald-950/40 dark:text-emerald-50",
  warning:
    "border-amber-500/30 bg-amber-500/[0.08] text-amber-950 dark:border-amber-500/35 dark:bg-amber-500/[0.08] dark:text-amber-50",
  error:
    "border-red-500/30 bg-red-500/[0.08] text-red-950 dark:border-red-500/35 dark:bg-red-950/40 dark:text-red-50",
};

const variantIcon: Record<keyof typeof variantClass, typeof Info> = {
  default: Info,
  brand: Info,
  gray: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
};

const variantIconClass: Record<keyof typeof variantClass, string> = {
  default: "text-slate-500 dark:text-slate-400",
  brand: "text-violet-600 dark:text-violet-300",
  gray: "text-slate-500 dark:text-slate-400",
  success: "text-emerald-600 dark:text-emerald-400",
  warning: "text-amber-600 dark:text-amber-300",
  error: "text-red-600 dark:text-red-400",
};

export type AlertProps = {
  variant?: keyof typeof variantClass;
  title?: string;
  children: ReactNode;
  className?: string;
  /** e.g. note for supplementary copy */
  role?: "alert" | "status" | "note";
  icon?: ReactNode;
};

/**
 * Theme-aware alert surface (floating card style inspired by application alert patterns).
 * For productized Untitled UI primitives, see https://untitledui.com/react/components/alerts
 */
export function Alert({
  variant = "default",
  title,
  children,
  className,
  role = "alert",
  icon,
}: AlertProps) {
  const Icon = variantIcon[variant];
  return (
    <div
      role={role === "note" ? undefined : role}
      className={cn(
        "flex gap-3 rounded-2xl border px-4 py-3 text-left shadow-sm sm:px-5 sm:py-4",
        variantClass[variant],
        className,
      )}
    >
      <span className={cn("mt-0.5 shrink-0", variantIconClass[variant])} aria-hidden>
        {icon ?? <Icon className="size-5" />}
      </span>
      <div className="min-w-0 flex-1 space-y-2">
        {title ? (
          <p className="text-sm font-semibold leading-snug tracking-tight">{title}</p>
        ) : null}
        <div className="text-sm leading-relaxed text-inherit [&_a]:text-violet-700 [&_a]:underline [&_a]:underline-offset-2 dark:[&_a]:text-violet-300 dark:[&_a]:hover:text-violet-200">
          {children}
        </div>
      </div>
    </div>
  );
}
