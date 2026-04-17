import type { StaticImageData } from "next/image";

/**
 * Brand logo strips  -  files under `public/logo/brand/core/` and
 * `public/logo/brand/networks/`, served as `/logo/brand/...`.
 */
export type TrustedNetworkLogo = {
  src: StaticImageData | string;
  alt: string;
  /** Dark or mixed artwork: force a light mark on dark UI (brightness + invert) */
  monoWhite?: boolean;
};

export type BrandLogoGroup = {
  id: "core" | "networks";
  title: string;
  description: string;
  logos: readonly TrustedNetworkLogo[];
};

/** Infrastructure, verification, and distribution partners */
export const CORE_BRAND_LOGOS: readonly TrustedNetworkLogo[] = [
  { src: "/logo/brand/core/pinata-ipfs.png", alt: "Pinata IPFS" },
  { src: "/logo/brand/core/SentientAGI.png", alt: "Sentient AGI" },
  {
    src: "/logo/brand/core/slither-logo.png",
    alt: "Slither static analysis",
    monoWhite: true,
  },
  { src: "/logo/brand/core/tenderly-logo.png", alt: "Tenderly" },
  { src: "/logo/brand/core/Thirdweb.png", alt: "thirdweb" },
] as const;

/** L1/L2 and network ecosystems */
export const NETWORK_BRAND_LOGOS: readonly TrustedNetworkLogo[] = [
  {
    src: "/logo/brand/networks/avalanche.png",
    alt: "Avalanche",
  },
  { src: "/logo/brand/networks/Base_Logo.png", alt: "Base" },
  { src: "/logo/brand/networks/bnb-chain-logo.png", alt: "BNB Chain" },
  { src: "/logo/brand/networks/filecoin-logo.png", alt: "Filecoin" },
  {
    src: "/logo/brand/networks/Kite_LogoWhite@2x.png",
    alt: "Kite AI",
    monoWhite: true,
  },
  { src: "/logo/brand/networks/metis.png", alt: "Metis" },
  {
    src: "/logo/brand/networks/skale-logo.png",
    alt: "SKALE",
    monoWhite: true,
  },
] as const;

export const BRAND_LOGO_GROUPS: readonly BrandLogoGroup[] = [
  {
    id: "core",
    title: "Core integrations",
    description: "IPFS, static analysis, simulation, and Web3 tooling in the delivery stack.",
    logos: CORE_BRAND_LOGOS,
  },
  {
    id: "networks",
    title: "Networks",
    description: "Deploy and operate across ecosystems we integrate with today.",
    logos: NETWORK_BRAND_LOGOS,
  },
] as const;

/** @deprecated Use `BRAND_LOGO_GROUPS` or `NETWORK_BRAND_LOGOS` */
export const TRUSTED_NETWORK_LOGOS: readonly TrustedNetworkLogo[] = NETWORK_BRAND_LOGOS;
