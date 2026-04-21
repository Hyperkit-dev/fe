import React from 'react';
import { Eye, Crosshair } from 'lucide-react';
import { VisionMissionCard } from '@/components/pages/foundation-vision-mission';

export const VisionMissionSection: React.FC = () => (
  <section id="vision" className="py-14 md:py-16 relative overflow-hidden">
    {/* Center Orb Glow */}
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at center, rgba(167, 139, 250, 0.4) 0%, rgba(99, 102, 241, 0.1) 40%, transparent 70%)'
      }}
    />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <VisionMissionCard 
          icon={<Eye className="w-5 h-5 text-indigo-400" />}
          title="Our Vision"
          color="indigo"
          content={[
            "We envision a decentralized future where financial and on-chain systems are accessible, interoperable, and driven by open collaboration. Our vision includes breaking down barriers between blockchain ecosystems so teams can ship multi-chain smart contracts without repeating the same workflow tax on every network.",
            "By fostering open-source development and community-driven innovation, we aim to create an inclusive environment where builders can participate in the next wave of DeFi and on-chain products, including AI-assisted delivery that stays accountable to evidence and governance.",
            "Our ultimate goal is to empower individuals and organizations worldwide with AI-native workflow tools to specify, generate, verify, simulate, and prepare deployment for decentralized applications that truly serve their communities.",
            "We measure progress on qualified usage, repeat workflow completion with retained artifact history, not vanity traffic; that keeps ambition aligned with what the product can prove."
          ]}
        />

        <VisionMissionCard 
          icon={<Crosshair className="w-5 h-5 text-purple-400" />}
          title="Our Mission"
          color="purple"
          content={[
            "Our mission is to build modular, reliable infrastructure for AI-native smart contract delivery: cross-chain aware, workflow-integrated, and honest about trust boundaries. We focus on reducing handoffs between specification, tooling, audit, simulation, and deploy preparation.",
            "We believe in community-driven growth and support developers through documentation, Studio entry points, and educational resources. The platform is designed to reduce complexity by keeping runs, artifacts, and deployment records in one place.",
            "Through continuous innovation we aim to enable secure, scalable, and open systems that can serve as the backbone for the next generation of decentralized applications, with measured milestones rather than hype-only launches.",
            "BYOK and gateway policy are part of that trust story: model keys stay under user control where designed, with rate limits and provenance so reviews map to evidence, not a finished enterprise attestation, but a clear direction."
          ]}
        />
      </div>
    </div>
  </section>
);