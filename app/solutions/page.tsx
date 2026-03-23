import React from 'react';
import type { Metadata } from "next";
import { BackgroundEffects } from '@/components/pages/solution-background';

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore Hyperkit solutions for Web3 development. Ecosystem tools, rewards, and role-based infrastructure for AI-powered dApps.",
};
import { Divider } from '@/components/pages/solution-divider';
import { EcosystemSection } from '@/components/pages/solution-ecosystem-section';
import { RewardsSection } from '@/components/pages/solution-rewards-section';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030014] text-slate-300 overflow-x-hidden selection:bg-purple-500/30 selection:text-white pb-24">
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} className="self-start mb-6 pt-8" />
        <EcosystemSection />
        <Divider />
        <RewardsSection />
      </div>
    </div>
  );
}