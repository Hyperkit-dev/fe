import type { MetadataRoute } from "next";
import { getCanonicalSiteUrl } from "@/lib/site-url";

/**
 * Served at /robots.txt for crawlers (Google Search Console, etc.).
 * Points to the XML sitemap at `/sitemap.xml` (not page URLs).
 */
export default function robots(): MetadataRoute.Robots {
  const base = getCanonicalSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
