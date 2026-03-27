import type { StaticImageData } from "next/image";

/**
 * Trusted networks strip — files live in `public/logo/brand/networks/`
 * and are loaded via `/logo/brand/networks/...`.
 */
export type TrustedNetworkLogo = {
  src: StaticImageData | string;
  alt: string;
};

export const TRUSTED_NETWORK_LOGOS: readonly TrustedNetworkLogo[] = [
  { src: "/logo/brand/networks/MantleNetwork-White.png", alt: "Mantle Network" },
  { src: "/logo/brand/networks/avalanche.png", alt: "Avalanche Network" },
  { src: "/logo/brand/networks/metis.png", alt: "Metis Network" },
] as const;
