import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ExternalLink,
  Layers,
  Mail,
  Megaphone,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FOUNDATION_TEAM } from "@/lib/foundation-team";
import type { ReactNode } from "react";

const CONTACT_MAIL =
  "mailto:hyperkitdev@gmail.com?subject=Hyperkit%20%20-%20%20builder%20introduction";

type ScopeBlock = {
  id: string;
  title: string;
  icon: ReactNode;
  accent: string;
  bullets: readonly string[];
};

const SCOPE_BLOCKS: readonly ScopeBlock[] = [
  {
    id: "product",
    title: "Product & company",
    icon: <Building2 className="h-4 w-4" aria-hidden />,
    accent:
      "border-violet-500/25 bg-violet-500/[0.07] text-violet-200/95 dark:border-violet-500/30",
    bullets: [
      "Own product narrative, roadmap sequencing, and scope guardrails so the wedge stays narrow until workflow pain is proven.",
      "Own smart contract and protocol decisions that affect shipping risk, with validation from high-fit teams on pain, spend, and buying motion.",
      "Keep documentation and agent instructions aligned with what the system actually does in production.",
      "Coordinate design and frontend execution so Studio matches the workflow story end to end.",
    ],
  },
  {
    id: "gtm",
    title: "Go-to-market & surfaces",
    icon: <Megaphone className="h-4 w-4" aria-hidden />,
    accent:
      "border-blue-500/25 bg-blue-500/[0.07] text-blue-200/95 dark:border-blue-500/30",
    bullets: [
      "Build and ship Studio and marketing surfaces so the workflow story is legible in the product, not only in decks.",
      "Turn technical workflow detail into demos, tutorials, and clear onboarding paths.",
      "Represent Hyperkit in ecosystem programs, hackathons, and partner conversations with accurate scope.",
      "Run distribution experiments across developer-native channels and measure qualified interest, not vanity attention.",
    ],
  },
  {
    id: "platform",
    title: "Platform & security",
    icon: <Shield className="h-4 w-4" aria-hidden />,
    accent:
      "border-emerald-500/25 bg-emerald-500/[0.07] text-emerald-200/95 dark:border-emerald-500/30",
    bullets: [
      "Own HyperAgent architecture: gateway, orchestration, verification services, and deployment adapters.",
      "Drive security posture and gap closure: auth boundaries, BYOK handling, rate limits, and provenance for runs and steps.",
      "Set code standards, review critical paths, and keep production hardening tied to an explicit release checklist.",
      "Prioritize one shippable MVP lane until repeat external workflows prove stability; keep security claims bounded by evidence.",
    ],
  },
] as const;

/**
 * Legal / Team & Roles — single founder, CEO-only scope (aligned with `FOUNDATION_TEAM`).
 * UI: composed with patterns similar to shadcn-style cards (rounded-2xl, ring, subtle surfaces)—project uses a lightweight Card; this page uses semantic sections instead.
 */
export function LegalFounderLeadership() {
  const leader = FOUNDATION_TEAM[0];
  const foundingMemberCount = FOUNDATION_TEAM.length;
  const leaderName = leader?.name ?? "Founder";

  if (!leader) {
    return (
      <div className="min-h-screen text-white">
        <section className="mx-auto w-full max-w-3xl p-8 lg:p-12">
          <p className="text-slate-400">Leadership information is not configured.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Hero */}
        <header className="mb-12 border-b border-white/5 pb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/15 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
            <Sparkles className="h-3.5 w-3.5 opacity-90" aria-hidden />
            Founder-led
          </div>

          <h1 className="mb-5 text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            One founder,
            <br />
            <span className="bg-gradient-to-r from-violet-200 to-violet-400/90 bg-clip-text font-serif italic text-transparent">
              full scope
            </span>{" "}
            on the business.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Hyperkit Labs is a solo-founder company. There is no separate executive bench today—
            <span className="text-slate-300">{leaderName}</span> is Chief Executive Officer and holds
            product, go-to-market, and technical accountability end to end.
          </p>

          <div className="mt-10 flex flex-wrap gap-8 sm:gap-10">
            <div>
              <p className="text-2xl font-medium tabular-nums text-white sm:text-3xl">
                {foundingMemberCount}
              </p>
              <p className="text-sm text-slate-500">
                {foundingMemberCount === 1 ? "Founding member" : "Founding members"}
              </p>
            </div>
            <div className="hidden h-12 w-px bg-white/10 sm:block" aria-hidden />
            <div>
              <p className="text-2xl font-medium text-white sm:text-3xl">Remote</p>
              <p className="text-sm text-slate-500">Async-first</p>
            </div>
          </div>
        </header>

        {/* Primary profile + scope */}
        <div className="space-y-10">
          <div>
            <h2 className="mb-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Leadership &amp; scope
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              The groups below are how we label scope areas for clarity. Operationally, one founder
              carries all of them—read down the page in a single column, not as three parallel teams.
            </p>
          </div>

          <article
            className={cn(
              "overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent",
              "shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_24px_80px_-32px_rgba(0,0,0,0.75)]",
              "ring-1 ring-inset ring-white/[0.06]"
            )}
          >
            <div className="space-y-10 p-6 sm:p-8 lg:p-10">
              {/* Profile — full width row; no squeezed side column */}
              <div className="flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-start sm:gap-8">
                <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-2xl ring-2 ring-violet-500/20 sm:mx-0 sm:h-44 sm:w-44">
                  <Image
                    src={leader.image}
                    alt={`${leader.name}, Hyperkit Labs`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 160px, 176px"
                    priority
                  />
                </div>
                <div className="min-w-0 flex-1 text-center sm:pt-1 sm:text-left">
                  <p className="text-xl font-semibold tracking-tight text-white">{leader.name}</p>
                  <p className="mt-1.5 text-sm leading-snug text-violet-300/90">{leader.role}</p>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-400">
                    Solo founder: product, operations, delivery, go-to-market, and platform are all
                    concentrated here—there is no separate leadership layer today.
                  </p>
                  <Link
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-300/90 underline-offset-4 hover:text-violet-200 hover:underline"
                  >
                    LinkedIn
                    <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
                  </Link>
                </div>
              </div>

              {/* Responsibilities — single column of full-width blocks (no 3-up grid) */}
              <div className="min-w-0">
                <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <Layers className="h-4 w-4 shrink-0 text-violet-400/80" aria-hidden />
                  Responsibilities
                </div>

                <div className="flex flex-col gap-5 sm:gap-6">
                  {SCOPE_BLOCKS.map((block) => (
                    <section
                      key={block.id}
                      className={cn(
                        "rounded-xl border p-5 sm:p-6",
                        "backdrop-blur-sm transition-colors",
                        block.accent
                      )}
                      aria-labelledby={`scope-${block.id}`}
                    >
                      <h3
                        id={`scope-${block.id}`}
                        className="mb-4 flex flex-wrap items-center gap-2 text-base font-semibold text-white"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black/25">
                          {block.icon}
                        </span>
                        {block.title}
                      </h3>
                      <ul className="max-w-prose space-y-3 text-sm leading-relaxed text-slate-300">
                        {block.bullets.map((line, idx) => (
                          <li key={`${block.id}-${idx}`} className="flex gap-3">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/80"
                              aria-hidden
                            />
                            <span className="min-w-0">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>

                <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                    <Zap className="h-3.5 w-3.5 shrink-0 text-violet-400" aria-hidden />
                    Impact
                  </div>
                  <p className="max-w-prose text-sm leading-relaxed text-slate-300">
                    Traction claims stay tied to shipped behavior and evidence: honest scope in
                    Studio and marketing, defensible security posture on the control plane, and no
                    implied bench where there is not one—just founder execution with clear
                    accountability.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-violet-500/[0.06] p-8 text-center sm:p-12">
          <h2 className="mb-3 text-2xl font-semibold text-white sm:text-3xl">Want to collaborate?</h2>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            We are not hiring for additional full-time roles right now. If you ship smart contracts
            often and want to stress-test an integrated generation, audit, simulation, and deploy-prep
            workflow, reach out—especially for structured pilots and feedback.
          </p>
          <a
            href={CONTACT_MAIL}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-medium text-slate-900 shadow-lg shadow-white/10 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Say hello
          </a>
        </div>
      </section>
    </div>
  );
}
