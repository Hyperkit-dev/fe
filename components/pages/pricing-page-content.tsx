import React from "react";
import Link from "next/link";
import { Badge } from "@/components/pages/solution-badge";
import { PricingTierCard } from "@/components/pricing/pricing-tier-card";
import { PRICING_TIERS } from "@/lib/pricing-tiers";

export const PricingPageContent: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto flex flex-col items-stretch pb-10">
    <div className="flex w-full flex-col items-center">
      <Badge>Pricing model</Badge>

      <header className="mb-8 text-center max-w-3xl md:mb-10">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4 text-balance">
        Plans &amp; usage economics
      </h1>
      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
        Tier names and figures below mirror our{" "}
        <span className="text-slate-800 dark:text-slate-300">documented pricing hypothesis</span> for
        planning and transparency. They are not a quote, commercial offer, or substitute for the
        agreements that govern purchase and use of paid services—see{" "}
        <Link
          href="/legal"
          className="text-violet-700 underline underline-offset-2 hover:text-violet-900 dark:text-violet-300/90 dark:hover:text-violet-200"
        >
          Legal
        </Link>{" "}
        for Terms, Privacy, and related policies. Technical detail lives in{" "}
        <Link
          href="/docs"
          className="text-violet-700 underline underline-offset-2 hover:text-violet-900 dark:text-violet-300/90 dark:hover:text-violet-200"
        >
          docs
        </Link>
        ; checkout, metering, and live billing track the{" "}
        <Link
          href="/roadmap"
          className="text-violet-700 underline underline-offset-2 hover:text-violet-900 dark:text-violet-300/90 dark:hover:text-violet-200"
        >
          public roadmap
        </Link>
        .
      </p>
    </header>
    </div>

    <section
      className="w-full"
      aria-labelledby="compare-tiers-heading"
    >
      <div className="mb-6 md:mb-8 text-center md:text-left">
        <h2
          id="compare-tiers-heading"
          className="text-lg font-medium text-slate-900 dark:text-white tracking-tight md:text-xl"
        >
          Compare tiers
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 md:mx-0 mx-auto">
          Each card shows what&apos;s included and metered overage rates in one view. Figures are
          illustrative until billing is generally available.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 2xl:grid-cols-3 2xl:gap-8">
        {PRICING_TIERS.map((tier) => (
          <PricingTierCard key={tier.id} tier={tier} />
        ))}
      </div>
    </section>

    <section
      className="w-full mt-12 md:mt-14 pt-8 md:pt-10 border-t border-slate-200/80 dark:border-white/10"
      aria-labelledby="pricing-principles-heading"
    >
      <h2
        id="pricing-principles-heading"
        className="text-lg font-medium text-slate-900 dark:text-white text-center mb-6"
      >
        How this model is meant to work
      </h2>
      <ul className="max-w-2xl mx-auto space-y-3 text-sm text-slate-600 dark:text-slate-400 text-center md:text-left list-none">
        <li className="flex gap-2 md:gap-3">
          <span className="text-violet-600 dark:text-violet-400/90 shrink-0" aria-hidden>
            ·
          </span>
          <span>
            <span className="text-slate-800 dark:text-slate-300">Entry pricing</span> stays near common solo developer-tool
            budgets; higher tiers earn their price through collaboration, governance, and support depth.
          </span>
        </li>
        <li className="flex gap-2 md:gap-3">
          <span className="text-violet-600 dark:text-violet-400/90 shrink-0" aria-hidden>
            ·
          </span>
          <span>
            <span className="text-slate-800 dark:text-slate-300">BYOK</span> belongs on paid plans as part of the trust
            model, not a premium bolt-on.
          </span>
        </li>
        <li className="flex gap-2 md:gap-3">
          <span className="text-violet-600 dark:text-violet-400/90 shrink-0" aria-hidden>
            ·
          </span>
          <span>
            <span className="text-slate-800 dark:text-slate-300">Simulation-backed deploy prep</span> stays below{" "}
            <span className="text-slate-800 dark:text-slate-300">production deployment orchestration</span> in marginal
            price, different workflow stages, different operational value.
          </span>
        </li>
      </ul>
    </section>

    <p className="mt-8 md:mt-10 mx-auto max-w-xl text-center text-sm leading-relaxed text-slate-500">
      Questions from budget owners and teams evaluating workflow spend are part of our validation
      program. See the{" "}
      <Link href="/roadmap" className="text-violet-700 underline underline-offset-2 hover:text-violet-900 dark:text-violet-300/90 dark:hover:text-violet-200">
        roadmap
      </Link>{" "}
      for gates around pricing instrumentation and billing operations.
    </p>
  </div>
);
