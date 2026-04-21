import React from "react";

export const HeroHeadline: React.FC = () => (
  <>
    <h1
      className="text-6xl md:text-8xl font-semibold tracking-tight mb-6 leading-[1.05] text-slate-900 dark:text-white"
      style={{ textShadow: "0 0 24px rgba(139, 92, 246, 0.18)" }}
    >
      Ship smart contracts
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-purple-500 to-violet-700 dark:from-white dark:via-purple-200 dark:to-white animate-hero-gradient">
        with a real workflow
      </span>
    </h1>

    <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
      <span className="text-slate-700 dark:text-slate-200">
        An AI-native workflow system for smart contract delivery.
      </span>{" "}
      Not a loose bag of tools. Hyperkit orchestrates specification, generation, audit,
      simulation, and deploy preparation so evidence and artifacts stay in one thread. The
      long-term direction is verifiable, deployment-aware starter output; today&apos;s Studio
      path is intentionally narrowed while each stage meets the same reliability bar.
    </p>
  </>
);
