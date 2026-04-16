import React from 'react';
import { NetworkVisual } from '@/components/pages/foundation-network-visual';

export const StorySection: React.FC = () => (
  <section id="story" className="relative py-14 md:py-16 border-y border-white/5 bg-[#030308]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <NetworkVisual />
        </div>

        <div className="text-left order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-5">Our Story</h2>
          <div className="space-y-5 text-slate-400 font-light leading-relaxed">
            <p>
              Hyperkit Labs began as an infrastructure-minded toolkit: modular surfaces, integration paths, and developer ergonomics closer to an SDK and workflow API than to a single end-user app. We cared about cross-network reality from day one because DeFi and smart contract teams were already juggling chain-specific adapters, deployment scripts, and fragmented tooling.
            </p>
            <p>
              As we shipped and spoke with high-fit builders, the bottleneck showed up less as &quot;missing primitives&quot; and more as coordination cost across specification, generation, audit, simulation, and deployment. That is the shift we made explicit: from generic infrastructure to an AI-native delivery stack where orchestration, evidence, and multi-chain preparation stay in one thread instead of scattering across tabs and tickets.
            </p>
            <p>
              Today Hyperkit is a workflow-first platform for smart contract teams: Studio and HyperAgent-shaped paths on supported routes, a public roadmap staged by risk, and traction in ecosystems such as Metis and Avalanche that reward serious infrastructure. Our open-source posture, transparent milestones, and community programs still anchor the culture, but the product story is now clearly AI-native blockchain delivery, not a loose bag of tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
