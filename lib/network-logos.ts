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
  /** Wide horizontal wordmark; row uses auto width + max-width instead of a square box */
  horizontalWordmark?: boolean;
  /** Tuning for horizontal marks: `medium` < `large` < `xlarge` (carousel matches square logo height) */
  horizontalWordmarkSize?: "medium" | "large" | "xlarge";
  /** viewBox-style size for `next/image` when `horizontalWordmark` is set */
  intrinsicSize?: { width: number; height: number };
  /** Skip grayscale strip styling; show asset colors as-is */
  fullColor?: boolean;
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
    src: "/logo/brand/networks/AvalancheLogo_Horizontal_1C_Red.svg",
    alt: "Avalanche",
    horizontalWordmark: true,
    horizontalWordmarkSize: "medium",
    intrinsicSize: { width: 1254, height: 227 },
  },
  { src: "/logo/brand/networks/Base_Logo.png", alt: "Base" },
  { src: "/logo/brand/networks/bnb-chain-logo.png", alt: "BNB Chain", fullColor: true },
  { src: "/logo/brand/networks/filecoin-logo.png", alt: "Filecoin", fullColor: true },
  {
    src: "/logo/brand/networks/arbitrum-white.png",
    alt: "Arbitrum",
    horizontalWordmark: true,
    horizontalWordmarkSize: "xlarge",
    intrinsicSize: { width: 640, height: 160 },
  },
  {
    src: "/logo/brand/networks/Solana-Logo-white.png",
    alt: "Solana",
    horizontalWordmark: true,
    horizontalWordmarkSize: "medium",
    intrinsicSize: { width: 640, height: 160 },
  },
  {
    src: "/logo/brand/networks/Kite_LogoWhite@2x.png",
    alt: "Kite AI",
    monoWhite: true,
  },
  {
    src: "/logo/brand/networks/metis-black-white-horizontal.svg",
    alt: "Metis",
    horizontalWordmark: true,
    intrinsicSize: { width: 2560, height: 918 },
  },
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
    description:
      "Ecosystems in the integration matrix; each route ships only after reliability proof. Studio’s documented path today emphasizes supported flows first.",
    logos: NETWORK_BRAND_LOGOS,
  },
] as const;

/** @deprecated Use `BRAND_LOGO_GROUPS` or `NETWORK_BRAND_LOGOS` */
export const TRUSTED_NETWORK_LOGOS: readonly TrustedNetworkLogo[] = NETWORK_BRAND_LOGOS;
