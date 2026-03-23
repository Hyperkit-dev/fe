"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface PerformanceContextType {
  reducedMotion: boolean;
}

const PerformanceContext = createContext<PerformanceContextType>({
  reducedMotion: false,
});

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = React.useState(false);
  React.useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  return (
    <PerformanceContext.Provider value={{ reducedMotion }}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformance() {
  return useContext(PerformanceContext);
}
