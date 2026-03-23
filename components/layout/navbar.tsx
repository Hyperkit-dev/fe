"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useThrottledScroll } from "@/hooks/use-throttled-scroll";

type FlatNavLink = { label: string; href: string; external?: boolean };

const NAV_LINKS: FlatNavLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Explore", href: "/explore" },
  { label: "Foundation", href: "/foundation" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Legal", href: "/legal" },
];

function isActive(href: string, pathname: string): boolean {
  if (href.startsWith("http")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const { isScrolled, scrollProgress } = useThrottledScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && mobilePanelRef.current) {
      const firstFocusable = mobilePanelRef.current.querySelector<HTMLElement>("a[href]");
      firstFocusable?.focus();
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 pt-6 px-6 pb-0 transition-all duration-[var(--duration-normal)] [contain:layout] ${
          isScrolled
            ? "backdrop-blur-md bg-slate-950/40 shadow-[var(--shadow-nav)]"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-auto flex items-center justify-center">
              <Image
                src="/logo/brand/hyperkit/hyperkit-header-white.svg"
                alt="Hyperkit Logo"
                width={120}
                height={32}
                className="object-contain h-8 w-auto"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-400">
            {NAV_LINKS.map((item) => {
              const active = pathname && !item.external && isActive(item.href, pathname);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-md hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    active ? "text-white border-b-2 border-purple-400/80 -mb-0.5" : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://waitlist.hyperkitlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Waitlist
              </a>
              <a
                href="https://ai.hyperkitlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-accent-primary)] to-purple-600 text-white text-sm font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-[var(--duration-normal)] shadow-[var(--shadow-cta)] border border-white/20"
              >
                Launch Studio
              </a>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-purple-500/80 transition-transform duration-150"
          style={{ width: "100%", transform: `scaleX(${scrollProgress})`, transformOrigin: "left" }}
          aria-hidden
        />
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              ref={mobilePanelRef}
              initial={reducedMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reducedMotion ? false : { x: "100%" }}
              transition={{ type: "tween", duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-slate-900/98 backdrop-blur-xl border-l border-[var(--color-border-default)] shadow-2xl overflow-y-auto"
            >
              <nav className="pt-20 pb-8 px-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((item) => {
                  const active = pathname && !item.external && isActive(item.href, pathname);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        active ? "text-white bg-white/10" : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="mt-4 pt-4 border-t border-[var(--color-border-default)] flex flex-col gap-2">
                  <a
                    href="https://waitlist.hyperkitlabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    Waitlist
                  </a>
                  <a
                    href="https://ai.hyperkitlabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-center rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white transition-all"
                  >
                    Launch Studio
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden">
        <div className="flex gap-3 p-4 bg-slate-950/95 backdrop-blur-xl border-t border-[var(--color-border-default)]">
          <a
            href="https://waitlist.hyperkitlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl text-center text-sm font-medium text-slate-300 border border-[var(--color-border-default)] hover:bg-white/5 hover:text-white transition-all duration-[var(--duration-normal)]"
          >
            Waitlist
          </a>
          <a
            href="https://ai.hyperkitlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl text-center text-sm font-medium bg-gradient-to-r from-[var(--color-accent-primary)] to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-[var(--duration-normal)] shadow-[var(--shadow-cta)]"
          >
            Launch Studio
          </a>
        </div>
      </div>
    </>
  );
}
