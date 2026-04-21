"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => (
  <div
    className={cn(
      "mb-8 inline-flex items-center justify-center rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md transition-colors",
      "hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10",
    )}
  >
    <span className="text-xs font-medium tracking-wide text-violet-700 dark:text-purple-200">
      {children}
    </span>
  </div>
);
