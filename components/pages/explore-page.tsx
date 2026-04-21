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
    <div className="group relative bg-[var(--color-bg-base)]/80 border border-slate-200/70 dark:border-white/5 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-white/10 transition-all duration-200">
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
          Explore Hyperkit
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Documentation, Studio, and ecosystem entry points for teams that ship smart contracts often. Start from the workflow problem - specification through audit, simulation, and deploy prep - not from a generic “AI for Web3” pitch.
        </p>
      </div>

      <ExploreSection
        title="Where Hyperkit fits"
        description="Verticals are examples of contract work; the product wedge is the delivery workflow itself."
      >
        <ExploreCard
          icon={Zap}
          iconColor="text-amber-400"
          title="DeFi protocols"
          description="Faster iteration when audits, simulation, and deploy checks cannot be skipped."
          links={[{ label: "Solutions overview", href: "/solutions", external: false }]}
        />
        <ExploreCard
          icon={ImageIcon}
          iconColor="text-pink-400"
          title="NFT & gaming contracts"
          description="Repeatable codegen and review loops for asset and marketplace logic."
          links={[{ label: "Solutions overview", href: "/solutions", external: false }]}
        />
        <ExploreCard
          icon={CreditCard}
          iconColor="text-emerald-400"
          title="Payments & commerce"
          description="Contract changes that touch money movement benefit from gated simulation and deploy records."
          links={[{ label: "Solutions overview", href: "/solutions", external: false }]}
        />
        <ExploreCard
          icon={ArrowLeftRight}
          iconColor="text-cyan-400"
          title="Multi-chain operators"
          description="Architecture targets many chains; expand usage only where reliability is proven."
          links={[{ label: "Roadmap & scope", href: "/roadmap", external: false }]}
        />
        <ExploreCard
          icon={Building2}
          iconColor="text-slate-400"
          title="Governance-heavy teams"
          description="DAOs and treasuries that need approval-ready artifacts and traceable runs."
          links={[{ label: "Security & policy", href: "/legal?view=security", external: false }]}
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
            { label: "Product changelog (site)", href: "/legal?view=changelog", external: false },
          ]}
        />
        <ExploreCard
          icon={Megaphone}
          iconColor="text-amber-400"
          title="Blog & News"
          description="Achievements, traction, and long-form updates on this site; technical reference stays in docs."
          links={[
            { label: "Blog & achievements", href: "/blog", external: false },
            { label: "Documentation", href: DOCS_URL, external: true },
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
            { label: "Hyperkit documentation", href: "/docs", external: false },
            { label: "Pricing (tier hypothesis)", href: "/pricing", external: false },
            { label: "Glossary (qualified usage, ICP)", href: "/glossary", external: false },
            { label: "Slide Decks & Docs", href: DOCS_URL, external: true },
          ]}
        />
      </ExploreSection>

      <ExploreSection
        title="Networks & programs"
        description="Hackathons and ecosystems where we have shipped demos; wallet and payment documentation today emphasizes supported SKALE Base flows."
      >
        <ExploreCard
          icon={Network}
          iconColor="text-purple-400"
          title="Launch matrix"
          description="Studio wallet, deployment, and x402-backed payments are documented on SKALE Base Mainnet and Sepolia. Other networks may appear in research or partnerships until they pass the same release bar."
          links={[
            { label: "Read the docs", href: DOCS_URL, external: true },
            { label: "Roadmap", href: "/roadmap", external: false },
          ]}
        />
        <ExploreCard
          icon={Building2}
          iconColor="text-slate-400"
          title="Case studies"
          description="We publish stories when there is a real deployment and retained artifacts to point to - not placeholder marketing pages."
          links={[{ label: "Docs & updates", href: DOCS_URL, external: true }]}
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
        title="Studio & tools"
        description="Dashboard, workflows, contracts, deployments, settings (BYOK), and payments surfaces as implemented in Studio."
      >
        <ExploreCard
          icon={Layout}
          iconColor="text-purple-400"
          title="Hyperkit Studio"
          description="Create runs, watch steps and logs, review generated Solidity, and open deployment records when gates pass."
          links={[
            { label: "Open Studio", href: AI_STUDIO_URL, external: true },
            { label: "Products overview", href: "/products", external: false },
          ]}
        />
      </ExploreSection>

      <ExploreSection
        title="Showcase"
        description="Execution milestones show we can build in public; they are not a substitute for measured customer traction."
      >
        <ExploreCard
          icon={Trophy}
          iconColor="text-amber-400"
          title="Hackathons & demos"
          description="Recent competition placements reflect execution quality, not market share."
          links={[
            { label: "Explore solutions", href: "/solutions", external: false },
            { label: "Documentation", href: DOCS_URL, external: true },
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
