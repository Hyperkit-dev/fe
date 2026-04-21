import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { BackgroundEffects } from "@/components/pages/landing-background-effects";
import { HeroSection } from "@/components/pages/landing-hero-section";
import { metadataForPage } from "@/lib/seo-metadata";

export const metadata: Metadata = metadataForPage("home");

const TrustedNetworks = dynamic(() => import("@/components/visual/Networks"), {
  loading: () => <div className="min-h-[200px]" aria-hidden />,
});

const FeatureGrid = dynamic(() => import("@/components/features/FeatureGrid"), {
  loading: () => <div className="min-h-[60vh]" aria-hidden />,
});

const CTASection = dynamic(() => import("@/components/pages/CTA-Section"), {
  loading: () => <div className="min-h-[120px]" aria-hidden />,
});

export default function App() {
  return (
    <div
      className="antialiased overflow-x-hidden selection:bg-purple-500/30"
      style={{
        color: "var(--color-text-primary)",
        background:
          "linear-gradient(to bottom, transparent 0%, transparent 60vh, var(--hero-gradient-mid) 75vh, var(--color-bg-base) 100%)",
      }}
    >
      <BackgroundEffects />

      <main className="relative z-10 pt-6 sm:pt-8 pb-20 md:pb-28 animate-fadeIn">
        <HeroSection />
        <TrustedNetworks />
        <FeatureGrid />
        <CTASection />
      </main>
    </div>
  );
}
