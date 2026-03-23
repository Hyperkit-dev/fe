import React from 'react';
import Image from 'next/image';

interface InvestorCardProps {
  initials: string;
  name: string;
  role: string;
  image?: string;
}

export const InvestorCard: React.FC<InvestorCardProps> = ({ initials, name, role, image }) => (
  <div className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all">
    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 overflow-hidden flex-shrink-0">
      {image ? (
        <Image src={image} alt={name} width={48} height={48} className="w-full h-full rounded-full object-cover" />
      ) : (
        <span className="text-sm font-bold text-white">{initials}</span>
      )}
    </div>
    <div>
      <h4 className="text-white font-medium">{name}</h4>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  </div>
);
