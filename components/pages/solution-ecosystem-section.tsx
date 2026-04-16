import React from 'react';
import { Badge } from '@/components/pages/solution-badge';
import { SectionHeader } from '@/components/pages/solution-header';
import { EcosystemCard } from '@/components/pages/solution-ecosystem-card';

export const EcosystemSection: React.FC = () => (
  <section className="w-full py-16 flex flex-col items-center">
    <Badge>Hyperkit Ecosystem</Badge>
    
    <SectionHeader 
      title={<>From specification to deploy-ready<br />without losing context</>}
      description="Hyperkit targets workflow fragmentation: the handoffs between generation, audit, simulation, and deployment that slow multi-chain teams. The architecture aims at broad multi-chain delivery; today’s documented Studio path is centered on supported SKALE Base flows until each additional chain meets the same reliability bar."
    />

    {/* Cards Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
      <EcosystemCard 
        label="Workflow"
        title="One orchestrated delivery path"
        description="Move from spec to Solidity, static analysis, simulation-backed deploy prep, and deployment records with retained artifacts - instead of stitching tools by hand each release."
      />
      
      <EcosystemCard 
        label="HyperAgent"
        title="Verification before deployment"
        description="HyperAgent sequences the stages that decide whether a contract is safe enough to ship. The wedge is integrated generation plus audit and simulation, not a thin chat wrapper."
        variant="highlighted"
        showCursor={true}
        codeSnippet={
          <>
            <span className="text-slate-500">POST</span> <span className="text-amber-200">/v1/workflows</span>
            <br />
            <span className="text-slate-600">{'{'}</span> <span className="text-cyan-300">&quot;spec&quot;</span><span className="text-slate-600">:</span> <span className="text-green-400">&quot;…&quot;</span> <span className="text-slate-600">{'}'}</span>
            <br />
            <span className="text-slate-500">--</span> <span className="text-slate-400">run_id, steps, artifacts</span>
          </>
        }
      />
      
      <EcosystemCard 
        label="Operators"
        title="Built for high-fit shipping teams"
        description="Solo auditors, small protocol cores, and governance-sensitive DAO operators who already pay for audits, simulation, or deployment glue - and want repeatability without platform sprawl."
      />
    </div>

    {/* Decorative bottom reflections */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6 opacity-30 pointer-events-none mix-blend-overlay">
      <div className="h-24 rounded-t-3xl border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="h-24 rounded-t-3xl border-t border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-transparent" />
      <div className="h-24 rounded-t-3xl border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
    </div>
  </section>
);