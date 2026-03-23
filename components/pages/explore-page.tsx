"use client";

import React from "react";
import Link from "next/link";
import {
  Zap,
  ImageIcon,
  CreditCard,
  ArrowLeftRight,
  Building2,
  BookOpen,
  Megaphone,
  Calendar,
  Video,
  FileText,
  Network,
  Wallet,
  Search,
  Database,
  BarChart3,
  Layout,
  Trophy,
  Puzzle,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const DOCS_URL = "https://docs.hyperkitlabs.com";
const AI_STUDIO_URL = "https://ai.hyperkitlabs.com";

type ExploreLink = { label: string; href: string; external?: boolean };

function ExploreCard({
  icon: Icon,
  title,
  description,
  links,
  iconColor,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  links: ExploreLink[];
  iconColor: string;
}) {
  return (
    <div className="group relative bg-[#030014]/80 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-200">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <h3 className="text-white font-medium text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group/link"
              >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover/link:opacity-100" />
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExploreSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16 last:mb-0">
      <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
      {description && (
        <p className="text-slate-400 text-sm mb-6 max-w-2xl">{description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
}

export function ExplorePage() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
          Explore Hyperkit for Web3 developers
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Documentation, SDKs, partners, and integrations—curated to help you ship multi-chain dApps and AI-assisted workflows with Hyperkit.
        </p>
      </div>

      <ExploreSection
        title="Use cases"
        description="How Hyperkit powers different sectors and workflows"
      >
        <ExploreCard
          icon={Zap}
          iconColor="text-amber-400"
          title="DeFi"
          description="Swaps, lending, yields, and on-chain finance"
          links={[{ label: "Explore DeFi solutions", href: "/solutions", external: false }]}
        />
        <ExploreCard
          icon={ImageIcon}
          iconColor="text-pink-400"
          title="NFTs & Gaming"
          description="Mint, marketplaces, and in-game assets"
          links={[{ label: "Explore NFT solutions", href: "/solutions", external: false }]}
        />
        <ExploreCard
          icon={CreditCard}
          iconColor="text-emerald-400"
          title="Payments"
          description="Checkout, invoicing, and payment flows"
          links={[{ label: "Explore payment solutions", href: "/solutions", external: false }]}
        />
        <ExploreCard
          icon={ArrowLeftRight}
          iconColor="text-cyan-400"
          title="Bridges"
          description="Cross-chain transfers and interoperability"
          links={[{ label: "Explore bridge solutions", href: "/solutions", external: false }]}
        />
        <ExploreCard
          icon={Building2}
          iconColor="text-slate-400"
          title="Enterprise"
          description="Compliance, custody, and institutional tools"
          links={[{ label: "Explore enterprise solutions", href: "/solutions", external: false }]}
        />
      </ExploreSection>

      <ExploreSection
        title="Resources"
        description="Documentation, updates, and learning materials"
      >
        <ExploreCard
          icon={BookOpen}
          iconColor="text-violet-400"
          title="Documentation"
          description="Guides, API references, and tutorials"
          links={[
            { label: "Getting Started", href: DOCS_URL, external: true },
            { label: "Tutorials", href: DOCS_URL, external: true },
            { label: "Changelog", href: DOCS_URL, external: true },
          ]}
        />
        <ExploreCard
          icon={Megaphone}
          iconColor="text-amber-400"
          title="Blog & News"
          description="Updates, launch notes, and announcements"
          links={[
            { label: "Blog", href: DOCS_URL, external: true },
            { label: "Launch Notes", href: DOCS_URL, external: true },
          ]}
        />
        <ExploreCard
          icon={Calendar}
          iconColor="text-emerald-400"
          title="Events"
          description="Webinars, workshops, and conference talks"
          links={[
            { label: "Events", href: DOCS_URL, external: true },
            { label: "Webinars & Workshops", href: DOCS_URL, external: true },
            { label: "Conference Talks", href: DOCS_URL, external: true },
          ]}
        />
        <ExploreCard
          icon={Video}
          iconColor="text-rose-400"
          title="Videos"
          description="Recordings and demos"
          links={[{ label: "Videos", href: DOCS_URL, external: true }]}
        />
        <ExploreCard
          icon={FileText}
          iconColor="text-slate-400"
          title="Slides & Docs"
          description="Presentations and technical documents"
          links={[
            { label: "Slide Decks & Docs", href: DOCS_URL, external: true },
          ]}
        />
      </ExploreSection>

      <ExploreSection
        title="Partners & Networks"
        description="Chains and ecosystems we work with"
      >
        <ExploreCard
          icon={Network}
          iconColor="text-purple-400"
          title="Networks"
          description="Supported chains and L2s"
          links={[
            { label: "Skale", href: DOCS_URL, external: true },
            { label: "Base", href: DOCS_URL, external: true },
            { label: "Mantle", href: DOCS_URL, external: true },
            { label: "Avalanche", href: DOCS_URL, external: true },
            { label: "Filecoin", href: DOCS_URL, external: true },
          ]}
        />
        <ExploreCard
          icon={Building2}
          iconColor="text-slate-400"
          title="Customers"
          description="Case studies and success stories"
          links={[{ label: "Customers & Case Studies", href: DOCS_URL, external: true }]}
        />
      </ExploreSection>

      <ExploreSection
        title="Integrations"
        description="Wallets, explorers, oracles, and tooling"
      >
        <ExploreCard
          icon={Wallet}
          iconColor="text-indigo-400"
          title="Wallets"
          description="Wallet integrations and standards"
          links={[{ label: "Wallets", href: DOCS_URL, external: true }]}
        />
        <ExploreCard
          icon={Search}
          iconColor="text-cyan-400"
          title="Explorers"
          description="Block explorers and indexing"
          links={[{ label: "Explorers", href: DOCS_URL, external: true }]}
        />
        <ExploreCard
          icon={Database}
          iconColor="text-amber-400"
          title="Oracles"
          description="Oracle integrations"
          links={[{ label: "Oracles", href: DOCS_URL, external: true }]}
        />
        <ExploreCard
          icon={BarChart3}
          iconColor="text-emerald-400"
          title="Monitoring & Analytics"
          description="Tracking and analytics tools"
          links={[{ label: "Monitoring / Analytics", href: DOCS_URL, external: true }]}
        />
      </ExploreSection>

      <ExploreSection
        title="Studio & Tools"
        description="Hyperkit Studio and developer tooling"
      >
        <ExploreCard
          icon={Layout}
          iconColor="text-purple-400"
          title="Hyperkit Studio"
          description="Low-code builder and workflow automation"
          links={[
            { label: "Studio Overview", href: AI_STUDIO_URL, external: true },
            { label: "Template Gallery", href: AI_STUDIO_URL, external: true },
            { label: "Playground / Sandboxes", href: AI_STUDIO_URL, external: true },
          ]}
        />
      </ExploreSection>

      <ExploreSection
        title="Showcase"
        description="Featured projects, hackathons, and templates"
      >
        <ExploreCard
          icon={Trophy}
          iconColor="text-amber-400"
          title="Featured"
          description="Highlighted projects and success stories"
          links={[
            { label: "Featured Projects", href: DOCS_URL, external: true },
            { label: "Hackathon Winners", href: DOCS_URL, external: true },
          ]}
        />
        <ExploreCard
          icon={Puzzle}
          iconColor="text-cyan-400"
          title="Templates"
          description="Starter kits and boilerplates"
          links={[{ label: "Starter Kits / Templates", href: DOCS_URL, external: true }]}
        />
      </ExploreSection>

      <ExploreSection
        title="Community"
        description="Join discussions and connect"
      >
        <ExploreCard
          icon={MessageCircle}
          iconColor="text-indigo-400"
          title="Chat & Social"
          description="Discord, Twitter, GitHub, and more"
          links={[
            { label: "Discord", href: "https://discord.gg/hyperkit", external: true },
            { label: "X (Twitter)", href: "https://x.com/hyperkit", external: true },
            { label: "GitHub", href: "https://github.com/hyperkit", external: true },
            { label: "QuestN / On-chain Quests", href: DOCS_URL, external: true },
          ]}
        />
      </ExploreSection>
    </div>
  );
}
