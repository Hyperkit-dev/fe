import React from 'react';
import { Sparkles, ShieldCheck, Globe, Activity, CheckCircle2 } from 'lucide-react';
import { GsapReveal } from '@/components/motion/gsap-reveal';

export default function Web3Toolset() {
  return (
    <GsapReveal className="min-h-screen text-slate-900 dark:text-white px-3 sm:px-4 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto min-w-0">
        {/* Grid Layout - 3 columns on desktop, AI card twice as tall with prominent code preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto_auto] gap-6 auto-rows-fr">
          {/* AI Contract Generation - Spans 2 columns, 2 rows, with mini-code-preview */}
          <div className="md:col-span-2 md:row-span-2 rounded-[var(--radius-card-lg)] p-8 border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] transition-colors duration-[var(--duration-normal)] relative overflow-hidden group flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
            <div className="relative z-10 flex flex-col flex-1 min-h-0">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">AI Contract Generation</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md mb-6">
                Describe intent in plain language; generation feeds the same orchestrated run as
                static analysis and simulation, not a one-off snippet. Tests and deploy scripts
                follow the workflow path so outputs stay reviewable end to end.
              </p>

              {/* Mini-code-preview - proves the "AI" claim immediately */}
              <div className="flex-1 min-h-0 flex flex-col mt-auto">
                <div className="p-4 rounded-[var(--radius-card)] bg-slate-100 dark:bg-[#05050A] border border-[var(--color-border-subtle)] font-mono text-xs text-slate-600 dark:text-slate-400 shadow-inner flex-1 min-h-[140px] overflow-x-auto">
                  <div className="text-purple-400 mb-2">
                    {`// Prompt: "ERC20 token with staking rewards"`}
                  </div>
                  <div className="text-slate-500 space-y-1">
                    <div><span className="text-blue-400">pragma</span> solidity ^0.8.20;</div>
                    <div><span className="text-blue-400">contract</span> <span className="text-amber-300">TokenStaking</span> <span className="text-blue-400">is</span> ERC20, Ownable {'{'}</div>
                    <div className="pl-4"><span className="text-blue-400">function</span> <span className="text-emerald-400">stake</span>(uint256 amount) <span className="text-blue-400">external</span> {'{ ... }'}</div>
                    <div className="pl-4"><span className="text-blue-400">function</span> <span className="text-emerald-400">claimRewards</span>() <span className="text-blue-400">external</span> {'{ ... }'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Auditing - Single column */}
          <div className="rounded-[var(--radius-card-lg)] p-8 border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] hover:border-blue-500/20 transition-all duration-[var(--duration-normal)] group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 relative z-10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2 relative z-10">Real-time Auditing</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
              Static analysis belongs in the default pipeline, not an optional export. Surface
              reentrancy, overflow, and common failure classes before simulation and deploy
              gates, not after the fact in a separate tool.
            </p>
            <div className="flex items-center gap-2 p-2 rounded bg-green-500/5 border border-green-500/10 relative z-10">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span className="text-[10px] font-medium text-green-400">Audit Passed (100%)</span>
            </div>
          </div>

          {/* Multi-chain Deploy - Single column */}
          <div className="rounded-[var(--radius-card-lg)] p-8 border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] hover:border-orange-500/20 transition-all duration-[var(--duration-normal)] group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20 relative z-10">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2 relative z-10">Multi-chain direction</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10">
              Architecture targets multi-chain delivery; each additional route only ships after
              reliability proof. The documented Studio path today centers on supported flows
              (e.g. SKALE Base for wallet, deployment, and payments), breadth follows depth.
            </p>
          </div>

          {/* Live Monitoring - Full width bottom row (balances AI card height) */}
          <div className="md:col-span-3 rounded-[var(--radius-card-lg)] p-8 border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] hover:border-cyan-500/20 transition-all duration-[var(--duration-normal)] group flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
            <div className="flex-1 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Runs &amp; provenance</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                The control plane is built around runs and steps: durable records, deployment
                metadata, and logs so reviews map to evidence, not a generic analytics bolt-on.
                Deeper live monitoring expands as reliability proof lands.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-24 flex items-end justify-between px-2 gap-1 opacity-80 relative z-10">
              <div className="w-1/6 h-[40%] bg-purple-500/20 rounded-t-sm"></div>
              <div className="w-1/6 h-[60%] bg-purple-500/30 rounded-t-sm"></div>
              <div className="w-1/6 h-[50%] bg-purple-500/20 rounded-t-sm"></div>
              <div className="w-1/6 h-[80%] bg-purple-500/50 rounded-t-sm"></div>
              <div className="w-1/6 h-[70%] bg-purple-500/40 rounded-t-sm"></div>
              <div className="w-1/6 h-[95%] bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm shadow-[0_0_15px_rgba(124,58,237,0.5)]"></div>
            </div>
          </div>
        </div>
      </div>
    </GsapReveal>
  );
}