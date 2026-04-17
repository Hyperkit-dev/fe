'use client';

import React, { useMemo } from 'react';
import ProfileCard from '@/components/ui/profile-card';

const GLOWS = [
  'rgba(99, 102, 241, 0.55)',
  'rgba(168, 85, 247, 0.5)',
  'rgba(34, 211, 238, 0.45)',
] as const;

const GRADIENTS = [
  'linear-gradient(145deg, rgba(99,102,241,0.35) 0%, rgba(56,189,248,0.25) 100%)',
  'linear-gradient(145deg, rgba(168,85,247,0.35) 0%, rgba(236,72,153,0.2) 100%)',
  'linear-gradient(145deg, rgba(34,211,238,0.28) 0%, rgba(99,102,241,0.3) 100%)',
] as const;

function handleFromName(name: string): string {
  const n = name.normalize('NFD').replace(/\p{M}/gu, '');
  const parts = n.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'hyperkit';
  if (parts.length === 1) return parts[0].toLowerCase().replace(/[^a-z0-9]/g, '');
  const a = parts[0].toLowerCase().replace(/[^a-z0-9]/g, '');
  const b = parts[parts.length - 1].toLowerCase().replace(/[^a-z0-9]/g, '');
  return `${a}.${b}`;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  index?: number;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, image, linkedin, index = 0 }) => {
  const i = index % 3;
  const avatar = image ?? '';
  const handle = useMemo(() => handleFromName(name), [name]);

  return (
    <div className="flex w-full justify-center">
      <ProfileCard
        className="w-full max-w-[300px] sm:max-w-[320px]"
        sizing="grid"
        avatarUrl={avatar}
        miniAvatarUrl={avatar}
        name={name}
        title={role}
        handle={handle}
        status="Hyperkit Labs"
        contactText="LinkedIn"
        showUserInfo={Boolean(linkedin)}
        onContactClick={
          linkedin ? () => window.open(linkedin, '_blank', 'noopener,noreferrer') : undefined
        }
        innerGradient={GRADIENTS[i]}
        behindGlowColor={GLOWS[i]}
        behindGlowSize="55%"
        enableTilt
        enableMobileTilt
        iconUrl="/assets/demo/iconpattern.png"
      />
    </div>
  );
};
