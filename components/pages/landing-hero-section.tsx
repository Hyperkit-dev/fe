import React from 'react';
import { GsapReveal } from '@/components/motion/gsap-reveal';
import { Badge } from '@/components/pages/landing-badge';
import { HeroHeadline } from '@/components/pages/landing-hero-headline';
import { CTAButtons } from '@/components/pages/landing-CTA-buttons';
import { TerminalWindow } from '@/components/pages/landing-terminal-window';

export const HeroSection: React.FC = () => (
  <GsapReveal className="w-full">
  <section className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
    <Badge>hyperkit v0.1.0</Badge>
    <HeroHeadline />
    <CTAButtons />
    {/* Darker center behind terminal for legibility */}
    <div className="w-full mt-4 relative">
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 85% 70% at 50% 50%, rgba(3,0,20,0.85) 0%, transparent 70%)",
        }}
      />
      <div className="relative rounded-2xl px-2 sm:px-4 py-4 sm:py-6 min-w-0">
        <TerminalWindow />
      </div>
    </div>
  </section>
  </GsapReveal>
);