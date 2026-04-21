import React from "react";
import type { Metadata } from "next";
import { BackgroundEffects } from "@/components/pages/solution-background";
import { PricingPageContent } from "@/components/pages/pricing-page-content";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { metadataForPage } from "@/lib/seo-metadata";

export const metadata: Metadata = metadataForPage("pricing");

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-slate-700 dark:text-slate-300 overflow-x-hidden selection:bg-purple-500/30 dark:selection:text-white pb-24">
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
          className="self-start mb-6 pt-8"
        />
        <PricingPageContent />
      </div>
    </div>
  );
}
