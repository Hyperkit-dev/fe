import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyperkitlabs.com";

/**
 * Served at /robots.txt for crawlers (Google Search Console, etc.).
 * Uses the same canonical origin as `metadataBase` in layout.tsx.
 */
export default function robots(): MetadataRoute.Robots {
  const base = SITE_URL.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
