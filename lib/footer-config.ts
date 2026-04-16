/**
 * Single source of truth for footer links and social URLs.
 * Used by `components/layout/footer.tsx`  -  update here only.
 */

export const FOOTER_TAGLINE =
  "The complete developer platform for building, testing, and deploying AI-powered Web3 applications.";

export type FooterLinkItem =
  | { label: string; href: string; external: true }
  | { label: string; href: string; external?: false };

export type FooterColumn = {
  title: string;
  links: readonly FooterLinkItem[];
};

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Studio", href: "https://ai.hyperkitlabs.com", external: true },
      { label: "Documentation", href: "https://docs.hyperkitlabs.com", external: true },
      { label: "Products", href: "/products" },
      { label: "Explore", href: "/explore" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.hyperkitlabs.com", external: true },
      { label: "Blog", href: "/blog" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Community", href: "https://discord.com/invite/MDh7jY8vWe", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/foundation" },
      { label: "Careers", href: "/legal" },
      { label: "Legal", href: "/legal" },
    ],
  },
] as const;

export const FOOTER_SOCIAL_LINKS = [
  { href: "https://discord.com/invite/MDh7jY8vWe", label: "Discord", icon: "/icons/footer/social/discord-white.svg" },
  { href: "https://t.me/hyperionkit", label: "Telegram", icon: "/icons/footer/social/telegram-white.svg" },
  { href: "https://x.com/Hyperkitlabs", label: "X (Twitter)", icon: "/icons/footer/social/x-white.svg" },
  { href: "https://github.com/Hyperkit-Labs", label: "GitHub", icon: "/icons/footer/social/github-white.svg" },
] as const;
