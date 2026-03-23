import React from 'react';

export const HeroHeadline: React.FC = () => (
  <>
    <h1
      className="text-6xl md:text-8xl font-semibold text-white tracking-tight mb-6 leading-[1.05]"
      style={{ textShadow: "0 0 24px rgba(139, 92, 246, 0.25)" }}
    >
      Ship Web3 Apps
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white bg-[length:200%_100%] animate-hero-gradient">
        10x Faster with AI
      </span>
    </h1>

    <p className="text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
      Combine AI-powered contract generation, built-in security auditing, and modular infrastructure to launch production-ready dApps in clicks.
    </p>
  </>
);