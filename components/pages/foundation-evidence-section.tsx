import React from "react";
import { ApproachEvidenceBento } from "@/components/pages/approach-evidence-bento";
import { cn } from "@/lib/utils";

/**
 * Evidence / approach section shell. Grid content lives in `ApproachEvidenceBento` (Kokonut-style bento + motion).
 */
export const FoundationEvidenceSection: React.FC<{
  /** When nested inside a parent that already applies horizontal padding (e.g. /solutions). */
  compactPadding?: boolean;
}> = ({ compactPadding = false }) => (
  <section
    id="approach"
    className="border-t border-white/5 bg-[var(--color-bg-section-alt)] py-14 md:py-16 w-full"
    aria-labelledby="approach-heading"
  >
    <div
      className={cn(
        "mx-auto max-w-7xl",
        compactPadding ? "px-4 sm:px-6" : "px-6"
      )}
    >
      <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
        <h2
          id="approach-heading"
          className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-3"
        >
          Evidence, trust, and scope
        </h2>
        <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
          How we align public claims with research and implementation, without mixing hackathon
          execution proof with validated demand.
        </p>
      </div>

      <ApproachEvidenceBento />
    </div>
  </section>
);
