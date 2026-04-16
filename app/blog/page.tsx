import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BlogPage } from "@/components/pages/blog-page";
import { metadataForPage } from "@/lib/seo-metadata";

export const metadata: Metadata = metadataForPage("blog");

export default function BlogRoute() {
  return (
    <div className="min-h-screen bg-[#030014] text-slate-300 overflow-x-hidden selection:bg-violet-500/30 selection:text-white pb-24">
      <div className="fixed top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.12)_0%,transparent_50%)] pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} className="mb-8" />
        <BlogPage />
      </div>
    </div>
  );
}
