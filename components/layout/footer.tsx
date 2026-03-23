"use client";

import Image from "next/image";
import Link from "next/link";
import { GsapReveal } from "@/components/motion/gsap-reveal";
import { FOOTER_COLUMNS, FOOTER_SOCIAL_LINKS, FOOTER_TAGLINE } from "@/lib/footer-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 border-t border-white/10 bg-[#02010a] text-slate-200"
      role="contentinfo"
      aria-label="Site footer"
    >
      <GsapReveal className="block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="h-10 sm:h-11 w-auto flex items-center" aria-label="Hyperkit home">
                <Image
                  src="/logo/brand/hyperkit/hyperkit-header-white.svg"
                  alt="Hyperkit Logo"
                  width={180}
                  height={48}
                  className="object-contain h-10 sm:h-11 w-auto max-w-[min(100%,280px)]"
                />
              </Link>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-xs mb-6">{FOOTER_TAGLINE}</p>
            <div className="flex gap-4" role="group" aria-label="Social links">
              {FOOTER_SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                  aria-label={label}
                >
                  <Image src={icon} alt="" width={20} height={20} className="w-5 h-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} className="flex flex-col gap-3" aria-label={column.title}>
              <h4 className="text-white font-semibold text-sm mb-2">{column.title}</h4>
              {column.links.map((item) =>
                item.external ? (
                  <a
                    key={`${column.title}-${item.label}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={`${column.title}-${item.label}`}
                    href={item.href}
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            <a
              href="https://github.com/Hyperkit-Labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition-colors underline-offset-2 hover:underline"
            >
              © {currentYear} Hyperkit Labs. All rights reserved.
            </a>
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e] animate-pulse" aria-hidden />
            <span className="text-slate-300 text-sm font-mono">All Systems Operational</span>
          </div>
        </div>
      </div>
      </GsapReveal>
    </footer>
  );
}
