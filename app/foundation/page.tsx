import React from 'react';
import type { Metadata } from "next";
import { HeroSection } from '@/components/pages/foundation-hero-section';
import { metadataForPage } from "@/lib/seo-metadata";

export const metadata: Metadata = metadataForPage("foundation");
import { StorySection } from '@/components/pages/foundation-story-section';
import { VisionMissionSection } from '@/components/pages/foundation-vision-mission-section';
import { TeamSection } from '@/components/pages/foundation-team-section';
import { InvestorsSection } from '@/components/pages/foundation-investor-section';

export default function App() {
  return (
    <div className="text-slate-300 antialiased overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200" style={{ backgroundColor: '#020205' }}>
      <HeroSection />
      <StorySection />
      <VisionMissionSection />
      <TeamSection />
      <InvestorsSection />
    </div>
  );
}
