import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyperkitlabs.com";

type RouteSpec = { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number };

const ROUTES: RouteSpec[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/explore", changeFrequency: "weekly", priority: 0.9 },
  { path: "/foundation", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products", changeFrequency: "weekly", priority: 0.85 },
  { path: "/solutions", changeFrequency: "weekly", priority: 0.85 },
  { path: "/roadmap", changeFrequency: "weekly", priority: 0.8 },
  { path: "/legal", changeFrequency: "yearly", priority: 0.5 },
  { path: "/maintenance", changeFrequency: "monthly", priority: 0.3 },
];

/**
 * Served at /sitemap.xml — referenced from robots.txt for Search Console indexing.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
