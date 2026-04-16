import React from 'react';
import Image from 'next/image';
import { InvestorCard } from '@/components/pages/foundation-investor-card';

const AVAX_DEVELOPERS_POST = 'https://x.com/AvaxDevelopers/status/2001334825199063331';
const ELENA_X = 'https://x.com/ElenaCryptoChic';
const NATALIA_X = 'https://x.com/Natalia_Ameline';

export const InvestorsSection: React.FC = () => (
  <section id="investors" className="py-24 bg-gradient-to-b from-[#020205] to-[#050510] border-t border-white/5 relative overflow-hidden">
    {/* Background grid fade */}
    <div 
      className="absolute bottom-0 w-full h-[500px] pointer-events-none"
      style={{
        background: 'linear-gradient(to top, rgba(99,102,241,0.05) 1px, transparent 1px)',
        backgroundSize: '100% 4px'
      }}
    />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">
          Backed by incredible investors
        </h2>
        <p className="text-slate-400 font-light">
          We&apos;re proud to build with some of the brightest minds in web3 and AI. Chances are, you&apos;re already using tools influenced by our partners and contributors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
        <InvestorCard 
          initials="ES"
          name="Elena Sinelnikova"
          role="Co-founder of Metis"
          image="/Profile/Elena Sinelnikova.png"
          credentialLabel="Credential · @ElenaCryptoChic"
          credentialHref={ELENA_X}
        />
        <InvestorCard 
          initials="NA"
          name="Natalia Ameline"
          role="Co-founder of Metis"
          image="/Profile/Natalia Ameline.png"
          credentialLabel="Credential · @Natalia_Ameline"
          credentialHref={NATALIA_X}
        />
        <InvestorCard
          name="Avalanche"
          role="Developer ecosystem · Hack2Build x402 AI"
          logoSrc="/logo/brand/networks/Avalanche_Logomark_Red.png"
          credentialLabel="Credential · Avax Developers (team)"
          credentialHref={AVAX_DEVELOPERS_POST}
        />
      </div>

      <div className="text-center border-t border-white/5 pt-12">
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-8">Trusted By</p>
        <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 bg-white/5">
          <Image
            src="/logo/brand/networks/metis.png"
            alt="Metis"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <Image
            src="/logo/brand/networks/avalanche.png"
            alt="Avalanche"
            width={220}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);
