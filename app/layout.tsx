// app/layout.tsx (Server Component)
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/app/providers";
import { Analytics } from "@vercel/analytics/next";
import { LayoutWrapper } from "./layout-wrapper";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { seoRoot } from "@/lib/seo-config";
import { getCanonicalSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const SITE_URL = getCanonicalSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seoRoot.titleDefault,
    template: seoRoot.titleTemplate,
  },
  description: seoRoot.description,
  keywords: [...seoRoot.keywords],
  authors: [{ name: "Hyperkit Labs", url: SITE_URL }],
  creator: "Hyperkit Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Hyperkit",
    title: seoRoot.titleDefault,
    description: seoRoot.description,
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
    title: seoRoot.titleDefault,
    description: seoRoot.description.slice(0, 200),
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
  url: SITE_URL,
  logo: `${SITE_URL}/logo/brand/hyperkit/Hyperkit Abstract.svg`,
  description: seoRoot.description,
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <SmoothScrollProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </SmoothScrollProvider>
        </Providers>
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}