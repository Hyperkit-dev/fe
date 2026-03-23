import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
  initials: string;
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ initials, name, role, image, linkedin }) => {
  const avatar = (
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1 ring-1 ring-white/10 group-hover:ring-indigo-500/30 transition-all overflow-hidden flex items-center justify-center mb-6">
      {image ? (
        <Image src={image} alt={name} width={96} height={96} className="w-full h-full rounded-full object-cover" />
      ) : (
        <span className="text-xl font-semibold text-indigo-300">{initials}</span>
      )}
    </div>
  );

  return (
  <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
    {linkedin ? (
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="cursor-pointer" aria-label={`Visit ${name}'s LinkedIn`}>
        {avatar}
      </a>
    ) : (
      avatar
    )}
    <h3 className="text-white text-lg font-medium mb-1">{name}</h3>
    <p className="text-xs text-indigo-400 font-medium uppercase tracking-wider mb-2">{role}</p>
  </div>
  );
};