import React from 'react';
import { TeamMemberCard } from '@/components/pages/foundation-team-member';

export const TeamSection: React.FC = () => (
  <section id="team" className="py-24 border-t border-white/5 bg-[#020205]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl text-white font-medium tracking-tight mb-4">
          Team Behind
        </h2>
        <p className="text-slate-400 text-lg font-light">Building the future of Hyperion</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TeamMemberCard 
          initials="AS"
          name="Aaron Jay Sopeña"
          role="Co-founder & CTO"
          image="/Profile/Aaron jay Sopeña.jpeg"
          linkedin="https://www.linkedin.com/in/aaron-jay-sopena-b6853732a/"
        />
        <TeamMemberCard 
          initials="JL"
          name="Justine Lupasi"
          role="Co-founder & CPOO"
          image="/Profile/Justine Lupasi.jpeg"
          linkedin="https://www.linkedin.com/in/justine-lupasi-444608295/"
        />
        <TeamMemberCard 
          initials="TT"
          name="Tristan Triñanes"
          role="Co-founder & CMFO"
          image="/Profile/Tristan Triñanes.jpeg"
          linkedin="https://www.linkedin.com/in/tristan-tri%C3%B1anes-7ba447356/"
        />
      </div>
    </div>
  </section>
);
