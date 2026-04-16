import type { Metadata } from "next";
import { SEO_SITE_URL, mergeSeoKeywords, seoMasterKeywords, seoPages } from "@/lib/seo-config";

type PageKey = keyof typeof seoPages;

/**
 * Next.js `metadata` export for a marketing route  -  title, description, keywords,
 * canonical (via `metadataBase`), Open Graph, and Twitter.
 */
export function metadataForPage(key: PageKey): Metadata {
  const p = seoPages[key];
  const url = `${SEO_SITE_URL}${p.path === "/" ? "" : p.path}`;

  return {
    title: p.title,
    description: p.description,
    keywords: mergeSeoKeywords(seoMasterKeywords, p.keywords),
    alternates: {
      canonical: p.path,
    },
    openGraph: {
      title: p.title,
      description: p.description,
      url,
      type: "website",
      siteName: "Hyperkit",
      locale: "en_US",
      images: [
        {
          url: "/logo/brand/hyperkit/Hyperkit Abstract.svg",
          width: 512,
          height: 512,
          alt: "Hyperkit",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
    },
  };
}
