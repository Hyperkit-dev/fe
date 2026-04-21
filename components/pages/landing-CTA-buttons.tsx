import React from "react";
import { ChevronRight } from "lucide-react";

export const CTAButtons: React.FC = () => (
  <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
    <a
      href="https://ai.hyperkitlabs.com"
      target="_blank"
      rel="noopener noreferrer"
      className="relative px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium shadow-[0_0_25px_-5px_rgba(124,58,237,0.6),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_0_35px_-5px_rgba(124,58,237,0.7),0_0_0_1px_rgba(255,255,255,0.15)_inset] hover:-translate-y-0.5 transition-all duration-300 inline-flex border border-white/20 animate-cta-pulse"
    >
      Get Started
    </a>
    <a
      href="https://docs.hyperkitlabs.com"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 rounded-full border border-slate-300/90 bg-white/60 text-slate-700 text-sm font-medium hover:bg-white hover:text-slate-900 transition-all flex items-center gap-1 group dark:border-white/10 dark:bg-transparent dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
    >
      Documentation <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
    </a>
  </div>
);
