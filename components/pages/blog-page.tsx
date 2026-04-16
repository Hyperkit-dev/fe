import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ExternalLink, Trophy } from "lucide-react";

const linkClass =
  "text-indigo-300 hover:text-indigo-200 underline underline-offset-2 decoration-indigo-500/50 hover:decoration-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-sm";

type Achievement = {
  id: string;
  title: string;
  subtitle: string;
  body: string[];
  logoSrc: string;
  logoAlt: string;
  logoClassName?: string;
  sources: { label: string; href: string }[];
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "hyperhack-metis",
    title: "HyperHack 2025 · Metis",
    subtitle: "Winner · Track 3 · Infrastructure and ecosystem tools",
    body: [
      "Hyperkit won Track 3 (Infrastructure and ecosystem tools) at HyperHack 2025, the first major developer hackathon on Hyperion. The event highlighted AI-native, real-time, and infrastructure-oriented work across a multi-track prize pool.",
      "This outcome matters to us because it validates the same thesis we document in our technical strategy: teams need integrated workflow across specification, generation, analysis, simulation, and deployment, not another disconnected toolkit.",
    ],
    logoSrc: "/logo/brand/networks/metis.png",
    logoAlt: "Metis",
    logoClassName: "max-h-10 w-auto object-contain object-left",
    sources: [
      { label: "Winner announcement (Metis iDAO forum)", href: "https://forum.ceg.vote/t/hyperhack-winners/10593" },
      { label: "Hyperkit Labs on X", href: "https://x.com/HyperkitLabs/status/1967660412687749474" },
    ],
  },
  {
    id: "hack2build-avalanche",
    title: "Hack2Build · x402 AI on Avalanche",
    subtitle: "Winner · Avalanche developer ecosystem",
    body: [
      "Hyperkit won the Hack2Build x402 AI track on Avalanche for work at the intersection of agentic workflows, on-chain settlement patterns, and practical builder tooling.",
      "Alongside our Metis hackathon result, this shows multi-ecosystem traction while we keep execution focused: fewer handoffs between tools, clearer evidence on each run, and delivery paths that stay honest about what is proven versus what is still experimental.",
    ],
    logoSrc: "/logo/brand/networks/Avalanche_Logomark_Red.png",
    logoAlt: "Avalanche",
    logoClassName: "max-h-9 w-auto object-contain object-left",
    sources: [
      { label: "Avax Developers on X", href: "https://x.com/AvaxDevelopers/status/2001334825199063331" },
    ],
  },
];

export const BlogPage: React.FC = () => (
  <div className="space-y-20">
    <header className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-200 text-xs font-medium mb-6 backdrop-blur-md">
        <BookOpen className="w-3.5 h-3.5 opacity-90" aria-hidden />
        Blog & traction
      </div>
      <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-5 text-balance">
        Writing, milestones, and public proof
      </h1>
      <p className="text-slate-400 text-lg leading-relaxed font-light text-pretty">
        Long-form posts will live here over time. For now, this page collects verified achievements and the narrative that ties them to our AI-native, multi-chain smart contract delivery thesis.
      </p>
    </header>

    <section aria-labelledby="achievements-heading" className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-300">
          <Trophy className="w-5 h-5" aria-hidden />
        </div>
        <div>
          <h2 id="achievements-heading" className="text-2xl font-medium text-white tracking-tight">
            Achievements
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">Hackathons and ecosystem recognition with primary sources.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((a) => (
          <article
            key={a.id}
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-6 md:p-8 flex flex-col gap-5 overflow-hidden hover:border-white/15 transition-colors"
          >
            <div className="absolute -right-16 -top-16 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative flex flex-col gap-4 min-h-[4.5rem]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-white">{a.title}</h3>
                  <p className="text-sm text-violet-300/90 mt-1">{a.subtitle}</p>
                </div>
                <div className="shrink-0 rounded-lg bg-black/40 border border-white/10 px-3 py-2 flex items-center justify-center min-w-[7rem]">
                  <Image
                    src={a.logoSrc}
                    alt={a.logoAlt}
                    width={200}
                    height={48}
                    className={a.logoClassName ?? "h-9 w-auto object-contain"}
                  />
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-400 leading-relaxed">
                {a.body.map((p, i) => (
                  <p key={`${a.id}-${i}`}>{p}</p>
                ))}
              </div>
            </div>
            <div className="relative pt-4 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Sources</p>
              <ul className="space-y-2">
                {a.sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 text-sm ${linkClass}`}>
                      {s.label}
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section aria-labelledby="thesis-heading" className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 md:p-10">
      <h2 id="thesis-heading" className="text-xl font-medium text-white mb-4">
        How this connects to the product thesis
      </h2>
      <div className="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed">
        <p>
          Our technical strategy centers on workflow fragmentation: high-fit teams still pay a coordination tax when they move between specification, codegen, audit tools, simulators, and deployment steps, especially across chains. The goal is not to parade isolated features; it is to compress those handoffs into a single, evidence-backed run.
        </p>
        <p>
          Hackathon wins do not replace user validation, but they are public proof that serious ecosystems will reward infrastructure and AI-native delivery ideas that match real builder pain. The roadmap and interview program described in our published strategy remain the honest scoreboard for adoption.
        </p>
        <p className="text-slate-500 text-sm">
          For scope and milestones, see the{" "}
          <Link href="/roadmap" className={linkClass}>
            roadmap
          </Link>
          {" "}and{" "}
          <Link href="/foundation" className={linkClass}>
            foundation
          </Link>
          {" "}pages.
        </p>
      </div>
    </section>

    <section aria-labelledby="posts-heading" className="border border-dashed border-white/15 rounded-2xl p-10 text-center">
      <h2 id="posts-heading" className="text-lg font-medium text-white mb-2">
        Blog posts
      </h2>
      <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
        Deep dives on architecture, validation, and shipping cadence are in progress. Check back here or follow{" "}
        <a href="https://x.com/Hyperkitlabs" target="_blank" rel="noopener noreferrer" className={linkClass}>
          @Hyperkitlabs on X
        </a>{" "}
        for updates.
      </p>
    </section>
  </div>
);
