import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { metadataForPage } from "@/lib/seo-metadata";

export const metadata: Metadata = metadataForPage("glossary");

const ENTRIES: { term: string; definition: string }[] = [
  {
    term: "Qualified usage",
    definition:
      "Repeat workflow completion with retained artifact history and meaningful stage completion, not signups, page views, or waitlists alone. Used internally and in roadmap gates to measure real product use.",
  },
  {
    term: "Active developer (roadmap sense)",
    definition:
      "A unique builder or operator who completes repeat workflow runs inside a defined time window, per the measurement framework we publish, not a vanity DAU count.",
  },
  {
    term: "Deployed dApp (counted honestly)",
    definition:
      "A production or testnet application whose contract generation and deployment flow completed through the Hyperkit workflow with deployment records and artifacts retained in the system.",
  },
  {
    term: "High-fit ICP",
    definition:
      "Interview and sales target profile: typically fast shipping cadence, multi-chain or chain-adjacent work, recurring audit/simulation/deploy coordination cost, and budget or tooling influence, as described in technical documentation.",
  },
  {
    term: "Falsification rule",
    definition:
      "Internal benchmark: if structured interviews with high-fit users fail to confirm recurring pain or spend at the stated threshold, we treat the workflow hypothesis as falsified for that segment rather than overriding it with narrative.",
  },
  {
    term: "Current product truth vs maturity direction",
    definition:
      "Present-tense scope is the AI-native workflow system on supported Studio paths. Longer-term direction is toward a verifiable application-factory scale, credible as roadmap, not claimed as fully shipped everywhere.",
  },
];

export default function GlossaryPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-bg-base)] text-slate-700 dark:text-slate-300 antialiased selection:bg-purple-500/30 dark:selection:text-white pb-24"
      style={{ backgroundColor: "var(--color-bg-base)" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Glossary" },
          ]}
          className="mb-10"
        />
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            Glossary
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Shared definitions for how we talk about traction, scope, and measurement, aligned with
            the{' '}
            <Link href="/docs" className="text-violet-300/90 underline underline-offset-2">
              technical documentation
            </Link>{' '}
            and public roadmap language.
          </p>
        </header>
        <dl className="space-y-8">
          {ENTRIES.map((e) => (
            <div key={e.term} className="border-b border-white/10 pb-8 last:border-0">
              <dt className="text-white font-medium mb-2">{e.term}</dt>
              <dd className="text-sm text-slate-400 leading-relaxed">{e.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
