import type { MetadataRoute } from "next";
import { SEO_SITE_URL } from "@/lib/seo-config";

/**
 * Served at /robots.txt for crawlers (Google Search Console, etc.).
 * Uses the same canonical origin as `metadataBase` in layout.tsx.
 */
export default function robots(): MetadataRoute.Robots {
  const base = SEO_SITE_URL;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
