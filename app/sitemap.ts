import type { MetadataRoute } from "next";
import { getCanonicalSiteUrl } from "@/lib/site-url";

type RouteSpec = { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number };

const ROUTES: RouteSpec[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/explore", changeFrequency: "weekly", priority: 0.9 },
  { path: "/foundation", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products", changeFrequency: "weekly", priority: 0.85 },
  { path: "/solutions", changeFrequency: "weekly", priority: 0.85 },
  { path: "/roadmap", changeFrequency: "weekly", priority: 0.8 },
  { path: "/legal", changeFrequency: "yearly", priority: 0.5 },
];

/**
 * Valid XML sitemap at `/sitemap.xml`.
 *
 * In Google Search Console → Sitemaps, submit only:
 *   `{canonicalOrigin}/sitemap.xml`
 * Do not submit individual routes like `/legal` or `/foundation` — those are HTML pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getCanonicalSiteUrl();
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
