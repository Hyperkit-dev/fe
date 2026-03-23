/**
 * Strategic SEO: one primary intent per page, natural titles/descriptions,
 * long-tail phrases where they match real queries — not repetition for its own sake.
 *
 * `seoMasterKeywords` is the broad project-related list merged into every route’s
 * `<meta name="keywords">` (many engines ignore it; still harmless when honest).
 */

import { getCanonicalSiteUrl } from "@/lib/site-url";

export const SEO_SITE_URL = getCanonicalSiteUrl();

/** Dedupe and flatten keyword lists for metadata exports. */
export function mergeSeoKeywords(...groups: readonly (readonly string[])[]): string[] {
  return [...new Set(groups.flat())];
}

/**
 * Project-wide keyword coverage: brand, AI×Solidity, chains, dev workflows,
 * security, and verticals aligned with Hyperkit’s marketing site.
 */
export const seoMasterKeywords: readonly string[] = [
  // Brand & product names
  "Hyperkit",
  "Hyperkit Labs",
  "Hyperkit Foundation",
  "Hyperkit Studio",
  "Hyperkit Pro",
  "Hyperkit ecosystem",

  // Solidity × AI
  "Solidity AI",
  "AI for Solidity",
  "AI Solidity",
  "Solidity generator",
  "Solidity code generation",
  "natural language to Solidity",
  "prompt to Solidity",
  "LLM smart contracts",
  "AI smart contracts",
  "AI-assisted smart contracts",
  "gas-optimized Solidity",
  "Solidity automation",

  // Smart contracts & dApps
  "smart contracts",
  "smart contract development",
  "smart contract deployment",
  "smart contract generation",
  "smart contract security",
  "smart contract testing",
  "smart contract automation",
  "dApp development",
  "dApp infrastructure",
  "dApp deployment",
  "decentralized applications",
  "Web3 applications",
  "blockchain applications",

  // Ethereum & EVM ecosystem
  "Ethereum",
  "Ethereum development",
  "EVM",
  "EVM chains",
  "EVM-compatible",
  "Ethereum L2",
  "Layer 2",
  "L2 scaling",
  "multi-chain",
  "cross-chain",
  "multi-chain SDK",
  "multi-chain deployment",
  "mainnet",
  "testnet",
  "Arbitrum",
  "Optimism",
  "Base chain",
  "Polygon",
  "zkSync",
  "Avalanche C-Chain",
  "BNB Smart Chain",

  // Developer tooling
  "Web3 developer platform",
  "Web3 developer tools",
  "blockchain developer tools",
  "Web3 SDK",
  "blockchain SDK",
  "crypto SDK",
  "developer documentation",
  "API integration",
  "REST API Web3",
  "wallet integration",
  "crypto wallet",
  "wallet automation",
  "asset onboarding",
  "blockchain infrastructure",
  "Web3 infrastructure",

  // AI & automation (product framing)
  "Web3 AI",
  "AI Web3 development",
  "AI-native Web3",
  "AI DeFi automation",
  "deployment automation",
  "test generation",
  "deployment scripts",

  // Security & quality
  "smart contract audit",
  "security analysis",
  "automated security",
  "reentrancy detection",
  "gas optimization",
  "Web3 security",

  // Verticals & use cases (site sections)
  "DeFi",
  "DeFi development",
  "NFT",
  "NFT infrastructure",
  "Web3 gaming",
  "payments crypto",
  "bridge",
  "cross-chain transfers",
  "enterprise Web3",

  // Token standards (referenced in UI / positioning)
  "ERC-20",
  "ERC-721",
  "ERC-1155",
  "token standards",
  "staking",
  "DeFi protocols",

  // Community & ecosystem
  "developer ecosystem",
  "Web3 ecosystem",
  "blockchain integrations",
  "open source Web3",
];

export type PageSeo = {
  title: string;
  description: string;
  /** Extra terms merged with `seoMasterKeywords` for this route. */
  keywords: string[];
  /** Canonical pathname (home is `/`). */
  path: `/${string}`;
};

/** Root layout defaults + shared template */
export const seoRoot = {
  titleTemplate: "%s | Hyperkit",
  titleDefault:
    "Hyperkit — Solidity AI & Web3 developer platform for smart contracts & multi-chain SDKs",
  description:
    "Ship faster with Solidity AI: describe logic in plain language, get gas-aware Solidity, tests, and deployment workflows. Security-minded tooling and a multi-chain SDK for Ethereum and L2s—built for production dApp teams.",
  keywords: mergeSeoKeywords(seoMasterKeywords),
} as const;

export const seoPages = {
  home: {
    path: "/" as const,
    title: "Solidity AI & smart contract platform — ship Web3 apps faster",
    description:
      "Hyperkit is a Solidity AI platform for teams: natural-language to Solidity, automated tests, deployment scripts, and security checks—plus modular infrastructure to launch production dApps on Ethereum and major L2s.",
    keywords: [
      "AI Solidity generator",
      "production dApps",
      "Ethereum and L2s",
    ],
  },
  explore: {
    path: "/explore",
    title: "Explore — Solidity AI docs, SDK, integrations & resources",
    description:
      "Explore Hyperkit documentation, SDK links, partners, and integrations—resources for Solidity AI workflows, multi-chain dApps, DeFi, NFTs, and production Web3 shipping.",
    keywords: [
      "Hyperkit documentation",
      "developer resources",
      "integration partners",
    ],
  },
  solutions: {
    path: "/solutions",
    title: "Solutions — ecosystem, rewards & Web3 infrastructure",
    description:
      "Discover Hyperkit solutions for Web3 teams: ecosystem tooling, incentives, and role-based infrastructure to ship Solidity AI-powered dApps with clearer operations and growth.",
    keywords: [
      "ecosystem tooling",
      "developer incentives",
      "rewards infrastructure",
    ],
  },
  products: {
    path: "/products",
    title: "Products — Solidity AI toolkit, wallets & Web3 automation",
    description:
      "Hyperkit products for Web3 builders: Solidity AI-assisted workflows, asset onboarding, wallet flows, and automation to deploy and operate DeFi and dApp experiences with less friction.",
    keywords: [
      "Web3 toolkit",
      "wallet flows",
      "DeFi automation",
    ],
  },
  foundation: {
    path: "/foundation",
    title: "Who is behind Hyperkit Labs? Foundation, team & Web3 mission",
    description:
      "Meet the Hyperkit Labs team and founders building Web3 developer infrastructure: mission, story, co-founders, and backers behind Hyperkit and its ecosystem.",
    keywords: [
      "Hyperkit Labs team",
      "Hyperkit founders",
      "Web3 infrastructure team",
      "Hyperkit Foundation",
      "who is Hyperkit Labs",
    ],
  },
  roadmap: {
    path: "/roadmap",
    title: "Roadmap — product milestones & launch phases",
    description:
      "Hyperkit roadmap: milestones from genesis through core expansion, governance, and mainnet-ready milestones. See what we are shipping next for Web3 developers.",
    keywords: [
      "product milestones",
      "governance roadmap",
      "launch phases",
    ],
  },
  legal: {
    path: "/legal",
    title: "Legal — policies, privacy, security & careers",
    description:
      "Hyperkit legal hub: terms, privacy, security practices, changelog, and career information for users and partners of our Web3 platform and services.",
    keywords: [
      "privacy policy",
      "terms of service",
      "security policy",
    ],
  },
  maintenance: {
    path: "/maintenance",
    title: "Maintenance",
    description:
      "Hyperkit is temporarily unavailable while we perform maintenance. Please check back shortly.",
    keywords: ["status page", "scheduled maintenance"],
  },
} as const satisfies Record<string, PageSeo>;
