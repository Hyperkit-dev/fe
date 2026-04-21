import React from 'react';
import Link from 'next/link';
import { NetworkVisual } from '@/components/pages/foundation-network-visual';

export const StorySection: React.FC = () => (
  <section id="story" className="relative py-14 md:py-16 border-y border-white/5 bg-[var(--color-bg-section-alt)]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <NetworkVisual />
        </div>

        <div className="text-left order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-5">Our Story</h2>
          <div className="space-y-5 text-slate-400 font-light leading-relaxed">
            <p className="text-slate-300">
              <span className="font-medium text-white">What we ship today:</span> an AI-native
              workflow system for smart contract delivery, specification through deploy preparation
              with verification stages and retained artifacts.{' '}
              <span className="font-medium text-white">Where we are headed:</span> a verifiable,
              deployment-aware application-factory direction (validated specs → runnable starter
              output), stated as roadmap and research, not as uniform present-tense scope on every
              chain surface.
            </p>
            <p>
              Hyperkit Labs began as an infrastructure-minded toolkit: modular surfaces, integration paths, and developer ergonomics closer to an SDK and workflow API than to a single end-user app. We cared about cross-network reality from day one because DeFi and smart contract teams were already juggling chain-specific adapters, deployment scripts, and fragmented tooling.
            </p>
            <p>
              As we shipped and spoke with high-fit builders, the bottleneck showed up less as &quot;missing primitives&quot; and more as coordination cost across specification, generation, audit, simulation, and deployment. That is the shift we made explicit: from generic infrastructure to an AI-native delivery stack where orchestration, evidence, and multi-chain preparation stay in one thread instead of scattering across tabs and tickets.
            </p>
            <p>
              Today Hyperkit is a workflow-first platform for smart contract teams: Studio and HyperAgent-shaped paths on supported routes, a public roadmap staged by risk, and traction in ecosystems such as Metis and Avalanche that reward serious infrastructure. Our open-source posture, transparent milestones, and community programs still anchor the culture, but the product story is now clearly AI-native blockchain delivery, not a loose bag of tools.
            </p>
            <p>
              In the terms of our{' '}
              <Link
                href="/docs"
                className="text-violet-300/95 underline underline-offset-2 decoration-violet-500/40 hover:text-violet-200"
              >
                technical documentation
              </Link>
              :{' '}
              <span className="text-slate-300">current product truth</span> is an AI-native
              workflow system for delivery; the{' '}
              <span className="text-slate-300">maturity direction</span> is toward verifiable,
              deployment-aware starter applications at factory scale, credible as direction, not
              as present-tense scope. Hackathon and ecosystem wins prove execution and fit; they
              do not substitute for validated repeat usage or willingness to pay, we state that
              gap on purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
