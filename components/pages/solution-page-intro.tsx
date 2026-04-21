import React from "react";

/**
 * Two-layer product story + pointer to the problem thesis.
 */
export const SolutionPageIntro: React.FC = () => (
  <div className="w-full max-w-3xl mx-auto text-center mb-12 md:mb-16">
    <p className="text-xs font-medium uppercase tracking-widest text-violet-300/80 mb-3">
      What Hyperkit is
    </p>
    <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-5 text-balance">
      AI-native workflow for delivery, not chat-only codegen
    </h1>
    <div className="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed text-left md:text-center">
      <p>
        <span className="text-slate-200">Current product truth:</span> Hyperkit is an AI-native{' '}
        <strong className="text-slate-200 font-medium">workflow system</strong> for smart contract
        delivery, stages, gates, and retained artifacts across specification, generation, audit,
        simulation, and deploy preparation.
      </p>
      <p>
        <span className="text-slate-200">Maturity direction:</span> toward a verifiable,
        deployment-aware &quot;application factory&quot; that turns validated specs into
        handoff-ready starter output, {' '}
        <span className="text-slate-300">a roadmap and research program</span>, not a claim that
        factory-scale scope is uniformly live today.
      </p>
    </div>
  </div>
);
