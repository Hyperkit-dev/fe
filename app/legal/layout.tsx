import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description: "Hyperkit legal hub. Privacy policy, terms of use, changelog, careers, and security policy.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
