import type { Metadata } from "next";
import MaintenancePage from "@/components/pages/maintenance-page";
import { metadataForPage } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  ...metadataForPage("maintenance"),
  robots: { index: false, follow: true },
};

export default function Maintenance() {
  return <MaintenancePage />;
}

