import React from 'react';

const DOCS_URL = 'https://docs.hyperkitlabs.com';
const STUDIO_URL = 'https://ai.hyperkitlabs.com';

const ctaPrimaryClass =
  'inline-flex min-h-11 items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-slate-200 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030014]';
const ctaSecondaryClass =
  'inline-flex min-h-11 items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors backdrop-blur-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030014]';

export const Header: React.FC = () => (
  <header className="text-center max-w-3xl mx-auto mb-24">
    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
      Studio and HyperAgent <br className="hidden md:block" /> for delivery workflows.
    </h1>
    <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto text-pretty">
      Hyperkit is a workflow system for smart contracts: connect a wallet, bring your own model keys, run generation with audit and simulation stages, and land on deployment records with traceability. It is not a promise that every chain or integration is equally mature today.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
      <a href={STUDIO_URL} className={ctaPrimaryClass} target="_blank" rel="noopener noreferrer">
        Open Studio
      </a>
      <a href={DOCS_URL} className={ctaSecondaryClass} target="_blank" rel="noopener noreferrer">
        Documentation
      </a>
    </div>
  </header>
);