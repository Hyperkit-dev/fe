import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Changelog: React.FC = () => (
  <section className="w-full max-w-6xl mx-auto animate-slide-up p-8 lg:p-12 min-h-full">
    {/* HEADER */}
    <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-8">
      <div>
        <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
          Changelog
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Notable updates to Hyperkit Studio, HyperAgent, and how we describe product scope on the marketing site. We prioritize clarity on what ships today versus what is still validating.
        </p>
      </div>

      <button
        type="button"
        className="hidden md:inline-flex min-h-10 px-4 py-2.5 rounded-lg glass-panel text-sm text-white hover:bg-white/5 transition-colors items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <Mail className="w-4 h-4" aria-hidden /> Subscribe to updates
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
      {/* LEFT TIMELINE */}
      <div className="lg:col-span-3">
        <div className="relative border-l border-white/10 space-y-12">
          {/* ENTRY 1 */}
          <div className="relative pl-8 group">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
              <h2 className="text-xl font-medium text-white tracking-tight">
                Website copy aligned to workflow scope and evidence
              </h2>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  Site
                </span>
                <span className="text-slate-500">April 16, 2026</span>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/10">
                Docs
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-slate-400 border border-white/5">
                Positioning
              </span>
            </div>

            <div className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              <p className="mb-4">
                Careers, security, changelog, solutions, products, explore, roadmap, and maintenance pages now describe Hyperkit as a workflow system for smart contract delivery - generation, audit, simulation, and deploy preparation in one orchestrated path - without overstating demand proof or chain breadth.
              </p>
              <ul className="space-y-1 mt-4">
                <li className="flex items-start gap-2">
                  <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">NEW</span>
                  <span>Roadmap framing emphasizes risk retirement (problem, product, market, scale) and qualified usage definitions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">CLARITY</span>
                  <span>Security page notes BYOK intent, JWT-gated APIs, and that some protections remain maturing.</span>
                </li>
              </ul>
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 mt-4 text-xs font-medium transition-colors"
              >
                View roadmap <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* ENTRY 2 */}
          <div className="relative pl-8 group">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.4)]" />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
              <h2 className="text-xl font-medium text-white tracking-tight">
                Studio: documented path from wallet to deploy record
              </h2>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                  Product
                </span>
                <span className="text-slate-500">Ongoing</span>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/10">
                Studio
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-slate-400 border border-white/5">
                HyperAgent
              </span>
            </div>

            <div className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              <p className="mb-4">
                The documented Studio flow connects a wallet, validates configuration and BYOK settings, runs specification through generation, runs static analysis and Tenderly-backed simulation where configured, then prepares or executes deployment when gates pass -  with runs, steps, and deployment records kept for traceability.
              </p>
              <ul className="space-y-1 mt-4">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">SCOPE</span>
                  <span>Wallet, deployment, and payment flows for Studio are centered on supported SKALE Base paths; broader multi-chain support remains architecture-level direction until proven per chain.</span>
                </li>
              </ul>
              <a
                href="https://docs.hyperkitlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 mt-4 text-xs font-medium transition-colors"
              >
                Documentation <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* ENTRY 3 */}
          <div className="relative pl-8 group">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
              <h2 className="text-xl font-medium text-white tracking-tight">
                Payments on supported flows: x402-first model
              </h2>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Billing
                </span>
                <span className="text-slate-500">In rollout</span>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/10">
                x402
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-slate-400 border border-white/5">
                SKALE Base
              </span>
            </div>

            <div className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              <p className="mb-4">
                The intended payment wall for supported Studio flows is x402 on SKALE Base Mainnet and Sepolia, aligned with per-run value for high-impact workflow events. Tiering and overage economics are still validated with budget owners - see pricing on the main site when available.
              </p>
            </div>
          </div>

          <div className="relative pl-8 mb-8">
            <div className="absolute -left-[3px] top-2 w-1.5 h-1.5 rounded-full bg-slate-800" />
            <p className="text-sm text-slate-500">
              Older release notes will be added here as versioned ship cadence stabilizes. For technical migration detail, prefer the docs repository and release tags.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR FILTERS */}
      <div className="lg:col-span-1">
        <div className="sticky top-8 space-y-12">
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Product area
            </h3>
            <div className="space-y-3">
              {['Studio', 'HyperAgent', 'API', 'Docs', 'Billing'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border border-violet-500/40 bg-violet-600 checked:bg-violet-600 checked:border-violet-400"
                  />
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Type
            </h3>
            <div className="space-y-3">
              {['Product', 'Docs', 'Positioning', 'Billing'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border border-violet-500/40 bg-violet-600 checked:bg-violet-600 checked:border-violet-400"
                  />
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="changelog-subscribe-email" className="text-sm text-slate-500 mb-3 block">
              Want these delivered to your inbox?
            </label>
            <div className="flex items-center gap-2">
              <input
                id="changelog-subscribe-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="your@email.com"
                className="min-h-10 w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:border-transparent"
              />
              <button
                type="button"
                className="inline-flex min-h-10 min-w-10 items-center justify-center p-2 rounded-lg bg-white text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                aria-label="Subscribe with email"
              >
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
