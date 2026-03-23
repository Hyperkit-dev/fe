/**
 * Strategic SEO: one primary intent per page, natural titles/descriptions,
 * long-tail phrases where they match real queries — not repetition for its own sake.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyperkitlabs.com";

export const SEO_SITE_URL = SITE_URL.replace(/\/$/, "");

export type PageSeo = {
  title: string;
  description: string;
  /** Supplemental terms for `<meta name="keywords">` (many engines ignore; still harmless when honest). */
  keywords: string[];
  /** Canonical pathname (home is `/`). */
  path: `/${string}`;
};

/** Root layout defaults + shared template */
export const seoRoot = {
  titleTemplate: "%s | Hyperkit",
  titleDefault: "Hyperkit — AI Web3 developer platform & multi-chain SDK",
  description:
    "Build and deploy Web3 apps faster with AI-assisted smart contracts, security-minded tooling, and a multi-chain SDK for Ethereum and L2s. Made for teams shipping production dApps.",
  keywords: [
    "Web3 developer platform",
    "AI smart contracts",
    "multi-chain SDK",
    "dApp development",
    "Ethereum",
    "Hyperkit Labs",
  ],
} as const;

export const seoPages = {
  home: {
    path: "/" as const,
    title: "AI Web3 developer platform — ship dApps faster",
    description:
      "Ship Web3 apps faster with AI-powered smart contract workflows, built-in security checks, and modular infrastructure. Hyperkit helps developers launch production-ready dApps on Ethereum and major L2s.",
    keywords: [
      "Web3 AI development",
      "smart contract automation",
      "multi-chain deployment",
      "dApp infrastructure",
      "developer tools Web3",
    ],
  },
  explore: {
    path: "/explore",
    title: "Explore — Web3 docs, SDK, integrations & resources",
    description:
      "Explore Hyperkit documentation, SDK links, partners, and integrations. Curated resources for building multi-chain dApps, DeFi, NFTs, and AI-assisted Web3 workflows.",
    keywords: [
      "Hyperkit documentation",
      "Web3 SDK resources",
      "blockchain integrations",
      "developer ecosystem",
    ],
  },
  solutions: {
    path: "/solutions",
    title: "Solutions — ecosystem, rewards & Web3 infrastructure",
    description:
      "Discover Hyperkit solutions for Web3 teams: ecosystem tooling, incentives, and role-based infrastructure to ship AI-powered dApps with clearer operations and growth.",
    keywords: [
      "Web3 infrastructure",
      "dApp ecosystem",
      "developer incentives",
      "Hyperkit solutions",
    ],
  },
  products: {
    path: "/products",
    title: "Products — Web3 toolkit, wallets & AI automation",
    description:
      "Hyperkit products for Web3 builders: asset onboarding, wallet flows, and AI automation to deploy and operate DeFi and dApp experiences with less friction.",
    keywords: [
      "Web3 toolkit",
      "crypto wallet integration",
      "AI DeFi automation",
      "Hyperkit products",
    ],
  },
  foundation: {
    path: "/foundation",
    title: "Foundation — mission, team & Hyperkit story",
    description:
      "Learn about the Hyperkit Foundation: vision, mission, team, and backers building open Web3 infrastructure and developer-first tooling.",
    keywords: [
      "Hyperkit Foundation",
      "Web3 infrastructure mission",
      "blockchain team",
    ],
  },
  roadmap: {
    path: "/roadmap",
    title: "Roadmap — product milestones & launch phases",
    description:
      "Hyperkit roadmap: milestones from genesis through core expansion, governance, and mainnet-ready milestones. See what we are shipping next for Web3 developers.",
    keywords: [
      "Hyperkit roadmap",
      "Web3 product roadmap",
      "mainnet milestones",
    ],
  },
  legal: {
    path: "/legal",
    title: "Legal — policies, privacy, security & careers",
    description:
      "Hyperkit legal hub: terms, privacy, security practices, changelog, and career information for users and partners of our Web3 platform and services.",
    keywords: [
      "Hyperkit privacy policy",
      "terms of service",
      "Web3 legal",
    ],
  },
  maintenance: {
    path: "/maintenance",
    title: "Maintenance",
    description:
      "Hyperkit is temporarily unavailable while we perform maintenance. Please check back shortly.",
    keywords: ["Hyperkit maintenance", "status"],
  },
} as const satisfies Record<string, PageSeo>;
