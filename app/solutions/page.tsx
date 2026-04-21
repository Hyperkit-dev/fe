import React from 'react';
import type { Metadata } from "next";
import { BackgroundEffects } from '@/components/pages/solution-background';
import { metadataForPage } from "@/lib/seo-metadata";

export const metadata: Metadata = metadataForPage("solutions");
import { Divider } from '@/components/pages/solution-divider';
import { EcosystemSection } from '@/components/pages/solution-ecosystem-section';
import { RewardsSection } from '@/components/pages/solution-rewards-section';
import { FoundationEvidenceSection } from '@/components/pages/foundation-evidence-section';
import { HyperAgentFourLayerChips, HyperAgentPipelineStrip } from '@/components/pages/hyperagent-pipeline-strip';
import { LandingProblemSection } from '@/components/pages/landing-problem-section';
import { SolutionPageIntro } from '@/components/pages/solution-page-intro';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-slate-700 dark:text-slate-300 overflow-x-hidden selection:bg-purple-500/30 dark:selection:text-white pb-24">
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} className="self-start mb-6 pt-8" />
        <SolutionPageIntro />
        <LandingProblemSection />
        <div className="w-full max-w-4xl mx-auto px-4 pb-6 md:pb-10">
          <p className="text-center text-xs text-slate-500 mb-4">
            HyperAgent: staged pipeline (not a single assistant). Ecosystem coverage and release boundaries follow in the sections below.
          </p>
          <HyperAgentPipelineStrip />
          <HyperAgentFourLayerChips className="mt-6" />
        </div>
        <FoundationEvidenceSection compactPadding />
        <EcosystemSection />
        <Divider />
        <RewardsSection />
      </div>
    </div>
  );
}