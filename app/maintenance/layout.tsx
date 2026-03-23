import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance",
  description: "Hyperkit is undergoing maintenance. We will be back shortly.",
  robots: { index: false, follow: false },
};

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
