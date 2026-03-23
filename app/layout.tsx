// app/layout.tsx (Server Component)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/app/providers";
import { Analytics } from "@vercel/analytics/next";
import { LayoutWrapper } from "./layout-wrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyperkitlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hyperkit - Innovation Engine for Web3",
    template: "%s | Hyperkit",
  },
  description: "Build Smarter. Deploy Faster. Thrive in Hyperkit. The complete developer platform for building, testing, and deploying AI-powered Web3 applications.",
  keywords: ["Hyperkit", "Web3", "blockchain", "DeFi", "AI", "developer platform", "SDK"],
  authors: [{ name: "Hyperkit Labs", url: "https://hyperkitlabs.com" }],
  creator: "Hyperkit Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Hyperkit",
    title: "Hyperkit - Innovation Engine for Web3",
    description: "Build Smarter. Deploy Faster. Thrive in Hyperkit. The complete developer platform for AI-powered Web3 applications.",
    images: [
      {
        url: "/logo/brand/hyperkit/Hyperkit Abstract.svg",
        width: 512,
        height: 512,
        alt: "Hyperkit Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperkit - Innovation Engine for Web3",
    description: "Build Smarter. Deploy Faster. Thrive in Hyperkit.",
  },
  icons: {
    icon: [{ url: "/logo/brand/hyperkit/Hyperkit Abstract.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hyperkit Labs",
  url: "https://hyperkitlabs.com",
  logo: "https://hyperkitlabs.com/logo/brand/hyperkit/Hyperkit Abstract.svg",
  description: "Innovation Engine for Web3. Build Smarter. Deploy Faster. AI-powered developer platform for multi-chain dApps.",
  sameAs: [
    "https://github.com/Hyperkit-Labs",
    "https://x.com/Hyperkitlabs",
    "https://t.me/hyperionkit",
    "https://discord.com/invite/MDh7jY8vWe",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://ai.hyperkitlabs.com" />
        <link rel="preconnect" href="https://docs.hyperkitlabs.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}