import React from "react";
import { FOUNDATION_TEAM } from "@/lib/foundation-team";
import { TeamMemberCard } from "@/components/pages/foundation-team-member";

export const TeamSection: React.FC = () => (
  <section id="team" className="border-t border-white/5 bg-[var(--color-bg-section)] py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          Team behind Hyperkit Labs
        </h2>
        <p className="mx-auto max-w-2xl text-lg font-light text-slate-400">
          Founder-led product and delivery for Hyperkit&apos;s AI-native smart contract workflow
          platform, research, roadmap, and ecosystem work you can connect with directly.
        </p>
      </div>

      <div className="mx-auto grid max-w-sm grid-cols-1 justify-items-center gap-10 md:gap-8">
        {FOUNDATION_TEAM.map((member, index) => (
          <TeamMemberCard
            key={member.name}
            index={index}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  </section>
);
