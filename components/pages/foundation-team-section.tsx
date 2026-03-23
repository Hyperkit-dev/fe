import React from "react";
import { FOUNDATION_TEAM } from "@/lib/foundation-team";
import { TeamMemberCard } from "@/components/pages/foundation-team-member";

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const TeamSection: React.FC = () => (
  <section id="team" className="border-t border-white/5 bg-[#020205] py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          Team behind Hyperkit Labs
        </h2>
        <p className="mx-auto max-w-2xl text-lg font-light text-slate-400">
          The people building Hyperkit&apos;s Web3 infrastructure and ecosystem—co-founders and
          leadership you can connect with directly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {FOUNDATION_TEAM.map((member) => (
          <TeamMemberCard
            key={member.name}
            initials={initials(member.name)}
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
