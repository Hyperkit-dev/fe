import React from "react";
import Link from "next/link";
import { Globe2 } from "lucide-react";

const DOCS_URL = "https://docs.hyperkitlabs.com";

/**
 * Honest Studio / multi-chain boundary (as described in technical documentation).
 * Use inside bento grids on Solutions or wrapped in a section when standalone.
 */
export const ReleaseBoundaryCard: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.06] px-4 py-4 sm:px-5 sm:py-4 ${className}`}
  >
    <div className="flex items-start gap-3 sm:gap-3.5">
      <div className="rounded-md bg-cyan-500/15 border border-cyan-500/25 p-1.5 text-cyan-300 shrink-0 mt-0.5">
        <Globe2 className="w-4 h-4" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <h3
          id="release-boundary-heading"
          className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-cyan-200/95"
        >
          Current release boundary
        </h3>
        <p className="mt-1.5 text-sm text-slate-300 leading-snug">
          The architecture is multi-chain-capable, but{' '}
          <span className="text-slate-200">Phase 1 / documented Studio</span> is intentionally
          narrow: wallet identity, deployment, and x402-backed payments are centered on{' '}
          <strong className="text-slate-100 font-medium">supported SKALE Base</strong> flows until
          each additional network meets the same reliability and observability bar. That is not
          “every EVM chain is equally mature in product today.”
        </p>
        <p className="mt-2 text-[11px] sm:text-xs text-slate-500 leading-snug">
          Scope detail in{' '}
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300/90 underline underline-offset-2 hover:text-cyan-200"
          >
            documentation
          </a>
          ; breadth vs depth is explicit on the{' '}
          <Link href="/roadmap" className="text-cyan-300/90 underline underline-offset-2 hover:text-cyan-200">
            roadmap
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
);

/** Standalone section wrapper (e.g. legacy layouts). Prefer `ReleaseBoundaryCard` in bento grids. */
export const SolutionReleaseBoundary: React.FC = () => (
  <section className="w-full max-w-4xl mx-auto mb-12 md:mb-16" aria-labelledby="release-boundary-heading">
    <ReleaseBoundaryCard />
  </section>
);
