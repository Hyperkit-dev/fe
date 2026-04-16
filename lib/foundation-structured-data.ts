import { getCanonicalSiteUrl } from "@/lib/site-url";
import { FOUNDATION_TEAM } from "@/lib/foundation-team";
import { seoPages } from "@/lib/seo-config";

/**
 * JSON-LD @graph for /foundation  -  AboutPage + Organization + founders (Person).
 * Helps search engines connect “who is behind Hyperkit Labs” to crawlable facts.
 */
export function getFoundationPageJsonLd(): Record<string, unknown> {
  const base = getCanonicalSiteUrl();
  const orgId = `${base}/#organization`;
  const websiteId = `${base}/#website`;
  const pageUrl = `${base}${seoPages.foundation.path}`;

  const founders = FOUNDATION_TEAM.map((m) => ({
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
    sameAs: m.linkedin,
    worksFor: { "@id": orgId },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: base,
        name: "Hyperkit Labs",
        publisher: { "@id": orgId },
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Hyperkit Labs",
        alternateName: ["Hyperkit", "Hyperkit Foundation"],
        url: base,
        description: seoPages.foundation.description,
        founder: founders,
        sameAs: [
          "https://github.com/Hyperkit-Labs",
          "https://x.com/Hyperkitlabs",
        ],
      },
      {
        "@type": ["WebPage", "AboutPage"],
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: seoPages.foundation.title,
        description: seoPages.foundation.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        mainEntity: { "@id": orgId },
      },
    ],
  };
}
