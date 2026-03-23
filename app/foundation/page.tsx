import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/pages/foundation-hero-section";
import { StorySection } from "@/components/pages/foundation-story-section";
import { VisionMissionSection } from "@/components/pages/foundation-vision-mission-section";
import { TeamSection } from "@/components/pages/foundation-team-section";
import { InvestorsSection } from "@/components/pages/foundation-investor-section";
import { getFoundationPageJsonLd } from "@/lib/foundation-structured-data";
import { metadataForPage } from "@/lib/seo-metadata";

export const metadata: Metadata = metadataForPage("foundation");

export default function FoundationPage() {
  const jsonLd = getFoundationPageJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div
        className="overflow-x-hidden text-slate-300 antialiased selection:bg-indigo-500/30 selection:text-indigo-200"
        style={{ backgroundColor: "#020205" }}
      >
        <HeroSection />
        <StorySection />
        <VisionMissionSection />
        <TeamSection />
        <InvestorsSection />
      </div>
    </>
  );
}
