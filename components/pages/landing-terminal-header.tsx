import React from "react";
import { Sun, MoreVertical } from "lucide-react";

export const TerminalHeader: React.FC = () => (
  <div className="relative flex items-center justify-between px-4 py-3 border-b border-purple-200/80 bg-violet-50/90 dark:border-purple-500/20 dark:bg-purple-500/[0.08]">
    <div className="flex items-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full border border-slate-300/80 dark:border-white/10" />
        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Hyperkit Pro</span>
        <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-200/80 text-slate-600 border border-slate-300/60 dark:bg-white/5 dark:text-slate-500 dark:border-white/5">
          Beta
        </span>
      </div>
    </div>
    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-500">
      <a
        href="https://docs.hyperkitlabs.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs hover:text-slate-900 transition-colors dark:hover:text-white"
      >
        Docs
      </a>
      <span className="text-xs hover:text-slate-900 cursor-pointer transition-colors dark:hover:text-white">
        Feedback
      </span>
      <Sun className="w-3.5 h-3.5 hover:text-slate-900 cursor-pointer transition-colors dark:hover:text-white" />
      <MoreVertical className="w-3.5 h-3.5 hover:text-slate-900 cursor-pointer transition-colors dark:hover:text-white" />
    </div>
  </div>
);
