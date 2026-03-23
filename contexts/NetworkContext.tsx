"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface NetworkContextType {
  chainId: number | null;
}

const NetworkContext = createContext<NetworkContextType>({
  chainId: null,
});

export function NetworkProvider({ children }: { children: ReactNode }) {
  return (
    <NetworkContext.Provider value={{ chainId: null }}>
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  return useContext(NetworkContext);
}
