import React from 'react';
import type { Metadata } from "next";
import {
  ShieldCheck,
  Zap,
  Globe2,
  Compass,
  CheckCircle2,
  ArrowRight,
  Target,
  Layers,
  LineChart,
} from "lucide-react";
import { metadataForPage } from "@/lib/seo-metadata";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = metadataForPage("roadmap");

const BackgroundEffects: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[50vh] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vh] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen" />
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundSize: '50px 50px',
        backgroundImage:
          'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
      }}
    />
  </div>
);

const STAGES = [
  {
    name: 'Experiments',
    sprints: 'S0–S2',
    risk: 'Problem risk',
    objective:
      'Validate that high-fit teams lose enough time or money across specification, generation, audit, simulation, and deployment to change behavior.',
    ships: [
      'ICP scorecard and screening rubric',
      'Jobs-to-be-done interview script and pain-ranking template',
      'Spend validation worksheet and pricing interviews',
      'Narrow demo: generation → audit → simulation → deploy prep',
    ],
    gate: 'Ten high-fit interviews, ≥6 confirm recurring pain or spend, five pricing interviews, TAM → SAM → SOM waterfall documented.',
  },
  {
    name: 'Foundation Proof',
    sprints: 'S3–S5',
    risk: 'Product risk',
    objective:
      'Turn the MVP from demo-ready into a repeatable system: invited teams complete real runs with audit and simulation inside HyperAgent.',
    ships: [
      'Wallet connection, BYOK validation, orchestration hardening',
      'Static analysis + Tenderly simulation in the default path',
      'Run and step persistence, deployment records, exports',
      'Beta qualification rules and release checklist',
    ],
    gate: 'Invited teams complete repeat workflow runs; audit and simulation occur in-product; qualification criteria active.',
  },
  {
    name: 'Market Validation',
    sprints: 'S6–S8',
    risk: 'Market risk',
    objective:
      'Prove adoption mechanics: self-serve onboarding, team workspaces, observable conversion, and qualified usage definitions.',
    ships: [
      'Onboarding wizard, blueprint library, freemium entry',
      'Usage tracking, funnel analytics, pricing instrumentation',
      'Team controls aligned to governance needs',
    ],
    gate: 'Qualified usage tracked; deployed dApps counted only with retained artifact history; conversion behavior observable.',
  },
  {
    name: 'Maturity',
    sprints: 'S9–S12',
    risk: 'Scale & operating risk',
    objective:
      'Earn enterprise trust with reliability reporting, billing operations, and partner-ready processes - without confusing shipping for demand proof.',
    ships: [
      'Enterprise dashboards, audit history, SLA workflow',
      'x402 automation, reconciliation, partner reporting',
      'Marketplace/registry experiments where they reduce coordination',
    ],
    gate: 'Enterprise controls, reliability reporting, billing operations, and partner processes live.',
  },
] as const;

const METRICS = [
  {
    label: 'Qualified active developers',
    definition:
      'Unique builders completing repeat workflow runs in a window - not signups, likes, or waitlists.',
  },
  {
    label: 'Deployed dApps (counted honestly)',
    definition:
      'Production or testnet apps that finished the Hyperkit workflow with artifacts and deployment records retained.',
  },
  {
    label: 'Repeat workflow completion',
    definition:
      'Second and third runs on non-trivial changes; the earliest signal stronger than a one-off demo.',
  },
] as const;

export default function HyperKitRoadmap() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-section)] text-slate-700 dark:text-slate-300 antialiased selection:bg-blue-500/30 dark:selection:text-blue-100 overflow-x-hidden">
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Roadmap" }]} className="mb-8" />
        <header className="mb-16 md:mb-20 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-medium mb-6 backdrop-blur-md shadow-lg shadow-blue-900/20">
            <span className="relative flex h-2 w-2">
              <span className="motion-reduce:animate-none animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Roadmap · risk-ordered
          </div>

          <h1 className="text-5xl md:text-7xl font-medium text-slate-900 dark:text-white tracking-tight mb-6">
            Retire risk <span className="bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent">in sequence</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light text-pretty">
            Hyperkit&apos;s roadmap is staged to remove problem, product, market, and scale risk - not to accumulate features for their own sake. Competition wins and architecture maturity prove execution; repeat workflow usage and paid behavior still require direct measurement.
          </p>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed mt-5 text-pretty">
            <span className="text-slate-400">Exit criteria beat calendar hype:</span> each stage ends
            in a hard gate, for example, &quot;Foundation Proof&quot; means invited teams complete{' '}
            <em>repeat</em> workflow runs with audit and simulation inside the product, not merely
            access granted. &quot;Closed beta&quot; is defined by those runs plus qualification
            rules, per the measurement framework we publish in technical documentation.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl p-6 relative group overflow-hidden hover:bg-white/[0.04] hover:border-blue-500/30 transition-all">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] group-hover:bg-blue-500/30 transition-colors" />
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Workflow integration</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Orchestrate specification, codegen, static analysis, simulation, and deploy preparation so teams stop paying the tax of disconnected tools.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-blue-400 font-medium">
              <span>Wedge: generation + audit</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl p-6 relative group overflow-hidden hover:bg-white/[0.04] hover:border-purple-500/30 transition-all">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px] group-hover:bg-purple-500/30 transition-colors" />
            <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Trust boundaries</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              JWT-gated APIs, workspace-scoped BYOK, rate limits on sensitive routes, and run/step provenance so reviews map to evidence.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-purple-400 font-medium">
              <span>Intent vs enforcement documented</span>
              <Zap className="w-3 h-3" />
            </div>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl p-6 relative group overflow-hidden hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px] group-hover:bg-cyan-500/30 transition-colors" />
            <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Multi-chain direction</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              The architecture targets multi-chain delivery; expansion follows reliability proof. Today’s documented Studio path centers on supported SKALE Base flows for wallet, deployment, and x402 payments.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400 font-medium">
              <span>Breadth only after depth</span>
              <Globe2 className="w-3 h-3" />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-8 flex items-center gap-2 uppercase tracking-widest opacity-80">
                <Compass className="w-4 h-4 text-blue-400" />
                How we measure
              </h3>
              <ul className="relative border-l border-white/5 ml-2 space-y-8 pb-4">
                <div className="absolute top-0 bottom-0 -left-px w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
                {METRICS.map((m) => (
                  <li key={m.label} className="relative pl-8">
                    <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] ring-4 ring-[var(--color-bg-section)]" />
                    <h4 className="text-sm font-medium text-slate-900 dark:text-white">{m.label}</h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">{m.definition}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="lg:col-span-9 space-y-16">
            {STAGES.map((stage, idx) => (
              <section key={stage.name} className="relative">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="h-px w-8 bg-blue-500/50" />
                      <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                        Stage {idx + 1} · {stage.sprints}
                      </span>
                    </div>
                    <h2 className="text-3xl font-medium text-slate-900 dark:text-white tracking-tight">{stage.name}</h2>
                    <p className="text-sm text-slate-500 mt-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-slate-600" />
                      Retiring {stage.risk}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
                    <LineChart className="w-3.5 h-3.5 text-emerald-400" />
                    Hard gate defined
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-3xl">{stage.objective}</p>

                <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 border-b border-white/5 bg-white/[0.02] px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    <div className="col-span-12 md:col-span-7">What ships</div>
                    <div className="hidden md:block md:col-span-5 text-right">Focus</div>
                  </div>
                  <div className="divide-y divide-white/5 text-sm">
                    {stage.ships.map((item) => (
                      <div
                        key={item}
                        className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="col-span-12 md:col-span-7 font-medium text-slate-200 flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                        <div className="col-span-12 md:col-span-5 md:text-right text-xs text-slate-500">
                          Proof over promise
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-violet-500/5 px-6 py-4 border-t border-white/5">
                    <p className="text-xs text-slate-400 leading-relaxed">
                      <span className="text-violet-300 font-semibold">Exit gate · </span>
                      {stage.gate}
                    </p>
                  </div>
                </div>
              </section>
            ))}

            <footer className="pt-16 border-t border-white/5 text-center relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-blue-900/10 rounded-full blur-[80px] pointer-events-none" />
              <p className="text-sm text-slate-500 relative z-10">
                © {new Date().getFullYear()} Hyperkit Labs. Roadmap items change when evidence says they should - not when slogans do.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
