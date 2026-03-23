import React from 'react';
import type { Metadata } from "next";
import { BackgroundEffects } from '@/components/pages/landing-background-effects';

export const metadata: Metadata = {
  title: "Home",
  description: "Hyperkit - Innovation Engine for Web3. Build Smarter. Deploy Faster. Thrive with AI-powered developer tools and multi-chain SDK.",
};
import { HeroSection } from '@/components/pages/landing-hero-section';
import TrustedNetworks from '@/components/visual/Networks';
import CTASection  from '@/components/pages/CTA-Section';
import FeatureGrid from '@/components/features/FeatureGrid';
export default function App() {
  return (
    <div
      className="antialiased overflow-x-hidden selection:bg-purple-500/30 selection:text-white"
      style={{
        color: "#F1F5F9",
        background: "linear-gradient(to bottom, transparent 0%, transparent 60vh, rgba(3,0,20,0.85) 75vh, #030014 100%)",
      }}
    >
      <BackgroundEffects />
      
      <main className="relative z-10 pt-6 sm:pt-8 pb-20 md:pb-28 animate-fadeIn">
        <HeroSection />
        <TrustedNetworks/>
        <FeatureGrid />
        <CTASection />
      </main>
    </div>
  );
}