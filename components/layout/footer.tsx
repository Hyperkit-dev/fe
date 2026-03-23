"use client";

import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  { href: "https://discord.com/invite/MDh7jY8vWe", label: "Discord", icon: "/icons/footer/social/discord-white.svg" },
  { href: "https://t.me/hyperionkit", label: "Telegram", icon: "/icons/footer/social/telegram-white.svg" },
  { href: "https://x.com/Hyperkitlabs", label: "X (Twitter)", icon: "/icons/footer/social/x-white.svg" },
  { href: "https://github.com/Hyperkit-Labs", label: "GitHub", icon: "/icons/footer/social/github-white.svg" },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-subtle)] pt-16 pb-8 bg-[var(--color-bg-elevated)]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="h-6 w-auto flex items-center" aria-label="Hyperkit home">
                <Image
                  src="/logo/brand/hyperkit/hyperkit-header-white.svg"
                  alt="Hyperkit Logo"
                  width={120}
                  height={32}
                  className="object-contain h-6 w-auto"
                />
              </Link>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs mb-6">
              The complete developer platform for building, testing, and deploying AI-powered Web3 applications.
            </p>
            <div className="flex gap-4" role="group" aria-label="Social links">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label={label}
                >
                  <Image src={icon} alt="" width={20} height={20} className="w-5 h-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-medium text-xs mb-1">Product</h4>
            <a href="https://ai.hyperkitlabs.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-xs hover:text-white transition-colors">
              Studio
            </a>
            <a href="https://docs.hyperkitlabs.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-xs hover:text-white transition-colors">
              Documentation
            </a>
            <Link href="/products" className="text-slate-400 text-xs hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/explore" className="text-slate-400 text-xs hover:text-white transition-colors">
              Explore
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-medium text-xs mb-1">Resources</h4>
            <a href="https://docs.hyperkitlabs.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-xs hover:text-white transition-colors">
              Documentation
            </a>
            <Link href="/roadmap" className="text-slate-400 text-xs hover:text-white transition-colors">
              Roadmap
            </Link>
            <a href="https://discord.com/invite/MDh7jY8vWe" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-xs hover:text-white transition-colors">
              Community
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-medium text-xs mb-1">Company</h4>
            <Link href="/foundation" className="text-slate-400 text-xs hover:text-white transition-colors">
              About
            </Link>
            <Link href="/legal" className="text-slate-400 text-xs hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="/legal" className="text-slate-400 text-xs hover:text-white transition-colors">
              Legal
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-[10px]">
            © {currentYear} Hyperkit Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e] animate-pulse"></span>
            <span className="text-slate-400 text-xs font-mono">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}