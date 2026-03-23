/**
 * Single canonical origin for metadata, sitemap, robots, and JSON-LD.
 *
 * Set `NEXT_PUBLIC_SITE_URL` in production to your primary domain exactly as users
 * and Search Console use it (e.g. `https://www.hyperkitlabs.com` if www is canonical).
 */
const DEFAULT_SITE = "https://www.hyperkitlabs.com";

export function getCanonicalSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE;
  return raw.replace(/\/$/, "");
}
