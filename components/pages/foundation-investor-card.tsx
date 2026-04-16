import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export interface InvestorCardProps {
  initials?: string;
  name: string;
  role: string;
  image?: string;
  /** Organization mark (e.g. chain logo); square tile instead of avatar. */
  logoSrc?: string;
  credentialLabel?: string;
  credentialHref?: string;
}

export const InvestorCard: React.FC<InvestorCardProps> = ({
  initials = "",
  name,
  role,
  image,
  logoSrc,
  credentialLabel,
  credentialHref,
}) => (
  <div className="flex flex-col gap-3 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all">
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 flex-shrink-0 overflow-hidden border border-white/10 ${
          logoSrc ? "rounded-xl bg-white/5 flex items-center justify-center p-1.5" : "rounded-full bg-slate-800 flex items-center justify-center"
        }`}
      >
        {logoSrc ? (
          <Image src={logoSrc} alt={`${name} logo`} width={40} height={40} className="max-w-full max-h-full object-contain" />
        ) : image ? (
          <Image src={image} alt={name} width={48} height={48} className="w-full h-full rounded-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">{initials}</span>
        )}
      </div>
      <div className="min-w-0">
        <h4 className="text-white font-medium">{name}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
    {credentialLabel && credentialHref ? (
      <a
        href={credentialHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-indigo-300 hover:text-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-sm"
      >
        {credentialLabel}
        <ExternalLink className="w-3 h-3 shrink-0 opacity-80" aria-hidden />
      </a>
    ) : null}
  </div>
);
