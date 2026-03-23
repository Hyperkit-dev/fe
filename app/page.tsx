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
    <div className="antialiased overflow-x-hidden selection:bg-purple-500/30 selection:text-white" style={{ backgroundColor: '#030014', color: '#F1F5F9' }}>
      <BackgroundEffects />
      
      <main className="relative z-10 pt-16 pb-20 md:pb-28 animate-fadeIn">
        <HeroSection />
        <TrustedNetworks/>
        <FeatureGrid />
        <CTASection />
      </main>
    </div>
  );
}