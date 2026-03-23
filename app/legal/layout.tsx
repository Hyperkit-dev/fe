import type { Metadata } from "next";
import { metadataForPage } from "@/lib/seo-metadata";

export const metadata: Metadata = metadataForPage("legal");

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
