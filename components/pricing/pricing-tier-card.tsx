import React from "react";
import { cn } from "@/lib/utils";
import type { PricingTier } from "@/lib/pricing-tiers";

type Props = { tier: PricingTier; className?: string };

function OverageRows({ lines, tierId }: { lines: PricingTier["overages"]; tierId: string }) {
  return (
    <ul className="space-y-0" role="list">
      {lines.map((row, i) => {
        if (row.kind === "note") {
          return (
            <li
              key={`${tierId}-note-${i}`}
              className="border-t border-white/5 py-2.5 text-sm leading-relaxed text-slate-500 first:border-t-0 first:pt-0 first:pb-2.5"
            >
              {row.detail}
            </li>
          );
        }
        return (
          <li
            key={`${tierId}-${row.amount}-${row.detail}`}
            className="grid grid-cols-[4.75rem_1fr] gap-x-3 gap-y-0 border-t border-white/5 py-2.5 text-sm first:border-t-0 first:pt-0 first:pb-2.5 sm:grid-cols-[5.25rem_1fr]"
          >
            <span className="tabular-nums font-semibold text-violet-200/95">{row.amount}</span>
            <span className="min-w-0 leading-snug text-slate-400">{row.detail}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function PricingTierCard({ tier, className }: Props) {
  return (
    <article
      className={cn(
        "flex h-full min-h-0 flex-col rounded-2xl border border-slate-200/90 bg-white shadow-sm",
        "dark:border-white/10 dark:bg-white/[0.03]",
        "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_12px_40px_-18px_rgba(0,0,0,0.65)]",
        "ring-1 ring-inset ring-slate-200/80 dark:ring-white/[0.06] p-5 sm:p-6",
        className
      )}
    >
      <div className="mb-1 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">{tier.name}</h3>
          <p className="mt-1 text-base font-semibold tabular-nums text-violet-300/95 sm:text-lg">
            {tier.priceLine}
          </p>
        </div>
        <span className="inline-flex w-fit shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
          Model
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 border-t border-slate-200 dark:border-white/10 pt-5 sm:grid-cols-2 sm:gap-5">
        <section
          className="flex min-h-0 flex-col rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.02]"
          aria-labelledby={`${tier.id}-included-heading`}
        >
          <p
            id={`${tier.id}-included-heading`}
            className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            What&apos;s included
          </p>
          <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-400 marker:text-violet-400/45 sm:pl-5">
            {tier.highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section
          className="flex min-h-0 flex-col rounded-xl border border-violet-500/20 bg-slate-100/90 dark:bg-[#06060d]/80 p-4"
          aria-labelledby={`${tier.id}-overages-heading`}
        >
          <p
            id={`${tier.id}-overages-heading`}
            className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-300/85"
          >
            Usage-based overages
          </p>
          <OverageRows lines={tier.overages} tierId={tier.id} />
        </section>
      </div>
    </article>
  );
}
