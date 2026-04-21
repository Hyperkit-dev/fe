/**
 * Strategic SEO: one primary intent per page, natural titles/descriptions,
 * long-tail phrases where they match real queries  -  not repetition for its own sake.
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
  "multi-chain deployment",
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
  "Web3 API",
  "workflow API",
  "smart contract API",
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
    "Hyperkit  -  AI-native workflow system for smart contract delivery",
  description:
    "Today: AI-native workflow system (spec → deploy prep with verification). Direction: verifiable application-factory scale, roadmap language, not uniform shipped scope. Studio path is depth-first; see solutions, foundation, glossary, and docs.hyperkitlabs.com.",
  keywords: mergeSeoKeywords(seoMasterKeywords),
} as const;

export const seoPages = {
  home: {
    path: "/" as const,
    title: "Solidity AI & smart contract platform  -  ship Web3 apps faster",
    description:
      "Today: AI-native workflow system for smart contract delivery. Direction: deployment-aware application factory on the roadmap, not claimed as fully shipped on every surface. Problem: coordination across spec, audit, simulation, deploy; HyperAgent is orchestration, not chat-only codegen.",
    keywords: [
      "AI Solidity generator",
      "smart contract workflow",
      "Ethereum and L2s",
    ],
  },
  explore: {
    path: "/explore",
    title: "Explore  -  docs, Studio, integrations & resources",
    description:
      "Explore Hyperkit documentation (docs.hyperkitlabs.com), Studio, roadmap, and integrations, workflow-first resources for Solidity teams, not a generic AI pitch.",
    keywords: [
      "Hyperkit documentation",
      "developer resources",
      "integration partners",
    ],
  },
  solutions: {
    path: "/solutions",
    title: "Solutions  -  ecosystem, rewards & Web3 infrastructure",
    description:
      "Two-layer story: AI-native workflow today; application-factory direction on the roadmap. HyperAgent pipeline, SKALE Base release boundary, ecosystem programs, in line with published technical docs.",
    keywords: [
      "ecosystem tooling",
      "developer incentives",
      "rewards infrastructure",
    ],
  },
  products: {
    path: "/products",
    title: "Products  -  Solidity AI toolkit, wallets & Web3 automation",
    description:
      "Studio and HyperAgent product surfaces: workspace artifacts, wallet-aware flows, orchestration through audit and simulation, handoff-ready output on supported paths per documented release scope.",
    keywords: [
      "Web3 toolkit",
      "wallet flows",
      "DeFi automation",
    ],
  },
  blog: {
    path: "/blog",
    title: "Blog & achievements  -  HyperHack, Hack2Build, and product thesis",
    description:
      "Verified hackathon milestones (HyperHack Metis, Hack2Build Avalanche) and how execution proof relates to the AI-native workflow thesis, distinct from market validation; methodology in technical docs.",
    keywords: [
      "HyperHack 2025",
      "Metis hackathon",
      "Avalanche Hack2Build",
      "x402 AI",
      "Hyperkit achievements",
    ],
  },
  foundation: {
    path: "/foundation",
    title: "Who is behind Hyperkit Labs? Foundation, team & Web3 mission",
    description:
      "Founder-led Hyperkit Labs: two-layer product story (workflow today vs factory direction), validation & ICP, BYOK trust posture, workflow-spend market model, founder guardrails, plus team, investors, and ecosystem partners.",
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
    title: "Roadmap  -  risk-ordered gates & validation",
    description:
      "Hyperkit roadmap retires problem, product, market, and scale risk in sequence, not feature hype. Hard gates for interviews, repeat workflow runs, qualified usage, and enterprise readiness. Execution proof is separate from demand proof.",
    keywords: [
      "product milestones",
      "governance roadmap",
      "launch phases",
    ],
  },
  glossary: {
    path: "/glossary",
    title: "Glossary  -  qualified usage, ICP, and roadmap terms",
    description:
      "Definitions for qualified usage, active developer, deployed dApp, high-fit ICP, falsification rule, and product-truth vs maturity direction, aligned with technical documentation and the public roadmap.",
    keywords: [
      "qualified usage",
      "Hyperkit glossary",
      "smart contract workflow definitions",
    ],
  },
  pricing: {
    path: "/pricing",
    title: "Pricing  -  plans, usage economics & tier hypothesis",
    description:
      "Published tier list and usage-based overage summary for Hyperkit, hypothesis aligned with technical docs and roadmap validation; not a live checkout or final billing promise.",
    keywords: [
      "Hyperkit pricing",
      "smart contract workflow pricing",
      "BYOK tiers",
      "usage-based overages",
    ],
  },
  legal: {
    path: "/legal",
    title: "Legal  -  policies, privacy, security & careers",
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
