import type { Metadata } from "next";

/** Redirect utility route: not meant to rank in search. */
export const metadata: Metadata = {
  title: "Documentation",
  robots: { index: false, follow: true },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
