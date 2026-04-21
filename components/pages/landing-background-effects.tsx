'use client';

import React, { useState, useEffect } from 'react';

/**
 * Animation budget: when prefers-reduced-motion is set or device may be power-constrained,
 * fall back to static CSS gradient. Reduces GPU load on low-end devices.
 */
export const BackgroundEffects: React.FC = () => {
  const [useReducedMotion, setUseReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setUseReducedMotion(mq.matches);
    const handler = () => setUseReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (useReducedMotion) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Page wash */}
        <div
          className="absolute inset-0"
          style={{
            background: "var(--landing-wash)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundSize: '50px 50px',
          backgroundImage:
            "linear-gradient(to right, var(--landing-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--landing-grid-line) 1px, transparent 1px)",
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        }}
      />

      {/* Beam Light  -  accent */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[600px] transform rotate-[-15deg] translate-x-1/4 -translate-y-1/4 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(167, 139, 250, 0.16) 0%, transparent 50%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Ambient Light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-75"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.22) 0%, transparent 55%), radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.18) 0%, transparent 45%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
};
