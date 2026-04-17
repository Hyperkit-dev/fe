import React from "react";
import { FOUNDATION_TEAM } from "@/lib/foundation-team";
import { TeamMemberCard } from "@/components/pages/foundation-team-member";

export const TeamSection: React.FC = () => (
  <section id="team" className="border-t border-white/5 bg-[#020205] py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          Team behind Hyperkit Labs
        </h2>
        <p className="mx-auto max-w-2xl text-lg font-light text-slate-400">
          The people building Hyperkit&apos;s Web3 infrastructure and ecosystem - co-founders and
          leadership you can connect with directly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
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
