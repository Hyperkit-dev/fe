// app/layout-wrapper.tsx
'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { PerformanceProvider } from "@/contexts/PerformanceContext";
import { NetworkProvider } from "@/contexts/NetworkContext";
import { shouldShowFooter } from "@/lib/layout-config";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showFooter = shouldShowFooter(pathname);

  return (
    <PerformanceProvider>
      <NetworkProvider>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-slate-900 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="relative z-10 pt-[var(--nav-height)] pb-8 md:pb-0" style={{ minHeight: "100vh" }}>
          {children}
        </div>
        {showFooter ? <Footer /> : null}
      </NetworkProvider>
    </PerformanceProvider>
  );
}