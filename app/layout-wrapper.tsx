// app/layout-wrapper.tsx
'use client';

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ExitIntentOverlay } from "@/components/ui/exit-intent-overlay";
import { PerformanceProvider } from "@/contexts/PerformanceContext";
import { NetworkProvider } from "@/contexts/NetworkContext";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
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
            <div id="main-content" className="pt-[var(--nav-height)] pb-24 md:pb-0" style={{ minHeight: "100vh" }}>
              {children}
              <Footer />
            </div>
            <ExitIntentOverlay />
      </NetworkProvider>
    </PerformanceProvider>
  );
}