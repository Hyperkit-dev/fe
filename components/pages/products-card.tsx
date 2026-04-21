import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  iconBorderColor: string;
  iconColor: string;
  title: string;
  description: string;
  linkColor: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  rowSpan?: 1 | 2;
}

const DOCS_URL = 'https://docs.hyperkitlabs.com';

export const Card: React.FC<CardProps> = ({
  icon,
  iconBgColor,
  iconBorderColor,
  iconColor,
  title,
  description,
  linkColor,
  href = DOCS_URL,
  children,
  className = '',
  rowSpan = 1
}) => (
  <div className={`group relative bg-[var(--color-bg-base)] border border-slate-200/70 dark:border-white/5 rounded-3xl overflow-hidden hover:border-slate-400/80 dark:hover:border-white/15 hover:scale-[1.02] transition-all duration-300 min-h-[320px] md:min-h-[380px] focus-within:ring-2 focus-within:ring-violet-400/40 dark:focus-within:ring-white/20 focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-bg-base)] focus-within:border-slate-400/90 dark:focus-within:border-white/20 motion-reduce:hover:scale-100 ${rowSpan === 2 ? "md:row-span-2" : ""} ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
    
    <div className="p-8 h-full flex flex-col z-10 relative">
      <div className={`mb-4 w-10 h-10 rounded-lg ${iconBgColor} flex items-center justify-center border ${iconBorderColor}`}>
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
          className: `w-5 h-5 ${iconColor}`,
        })}
      </div>
      <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-light">
        {description}
      </p>
      <Link href={href} className={`text-sm ${linkColor} hover:opacity-80 font-medium inline-flex items-center gap-1 mb-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)] rounded`}>
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
      {children}
    </div>
  </div>
);