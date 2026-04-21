import React from "react";

import { GsapReveal } from "@/components/motion/gsap-reveal";
import { Alert } from "@/components/ui/alert";

/**
 * Plain-language problem framing: fragmentation and coordination cost,
 * without unproven time-loss figures.
 */
export const LandingProblemSection: React.FC = () => (
  <GsapReveal className="w-full">
    <section
      className="mx-auto max-w-5xl px-4 pb-10 pt-2 sm:pb-14"
      aria-labelledby="landing-problem-heading"
    >
      <Alert variant="warning" role="note" className="rounded-2xl px-5 py-6 sm:px-8 sm:py-8">
        <div className="space-y-4">
          <div>
            <h2
              id="landing-problem-heading"
              className="text-sm font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-200/90"
            >
              The problem
            </h2>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
              Teams still coordinate specification, generation, audit, simulation, and deployment
              across disconnected tools and chain-specific steps, multi-chain work amplifies the
              handoffs. The pain is coordination and release risk, not “missing an AI button.”
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed list-none">
            {[
              "Workflow fragmentation: context and evidence scatter across tickets, repos, and dashboards.",
              "Repeated manual reconciliation between codegen output, analysis, simulation, and deploy scripts.",
              "Release risk: shipping before verification stages are complete enough for your bar.",
              "Chain-specific adapters and tooling multiply the coordination tax for multi-chain teams.",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-lg border border-amber-900/10 bg-white/60 px-3 py-2.5 dark:border-white/5 dark:bg-black/20"
              >
                <span className="text-amber-600/90 dark:text-amber-400/80 shrink-0" aria-hidden>
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-600 dark:text-slate-500 leading-relaxed">
            We do not headline unproven “hours per week” claims on this site; those stay in structured
            research and the{" "}
            <a href="/docs" className="text-violet-700 underline underline-offset-2 hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200">
              documentation
            </a>{" "}
            as hypotheses or interview thresholds, not as established facts.
          </p>
        </div>
      </Alert>
    </section>
  </GsapReveal>
);
