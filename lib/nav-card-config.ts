import type { CardNavItem } from "@/components/CardNav";

/**
 * CardNav groups: Product (discover), Network (ecosystem), Resources (legal & external).
 */
export const CARD_NAV_ITEMS: CardNavItem[] = [
  {
    label: "Product",
    bgColor: "#0D0716",
    textColor: "#f1f5f9",
    links: [
      { label: "Solutions", href: "/solutions", ariaLabel: "Hyperkit solutions" },
      { label: "Pricing", href: "/pricing", ariaLabel: "Hyperkit pricing and plans" },
      { label: "Products", href: "/products", ariaLabel: "Hyperkit products" },
      { label: "Explore", href: "/explore", ariaLabel: "Explore Hyperkit" },
    ],
  },
  {
    label: "Network",
    bgColor: "#170D27",
    textColor: "#f1f5f9",
    links: [
      { label: "Foundation", href: "/foundation", ariaLabel: "Foundation network" },
      { label: "Glossary", href: "/glossary", ariaLabel: "Glossary and definitions" },
      { label: "Blog", href: "/blog", ariaLabel: "Blog and achievements" },
      { label: "Roadmap", href: "/roadmap", ariaLabel: "Product roadmap" },
    ],
  },
  {
    label: "Resources",
    bgColor: "#271E37",
    textColor: "#f1f5f9",
    links: [
      { label: "Legal", href: "/legal", ariaLabel: "Legal information" },
      {
        label: "Waitlist",
        href: "https://waitlist.hyperkitlabs.com",
        ariaLabel: "Join the waitlist",
        external: true,
      },
      { label: "Status", href: "/maintenance", ariaLabel: "System status" },
    ],
  },
];
