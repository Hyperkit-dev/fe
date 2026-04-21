"use client";

import CardNav from "@/components/CardNav";
import { CARD_NAV_ITEMS } from "@/lib/nav-card-config";

const LOGO_SRC = "/logo/brand/hyperkit/hyperkit-header-white.svg";

export default function Navbar() {
  return (
    <CardNav
      className="card-nav--site-shell"
      navClassName="card-nav--dark"
      logo={LOGO_SRC}
      logoAlt="Hyperkit"
      items={CARD_NAV_ITEMS}
      baseColor="var(--color-nav-bg)"
      menuColor="var(--color-nav-menu)"
      ease="power3.out"
      ctaHref="https://ai.hyperkitlabs.com"
      ctaLabel="Launch Studio"
      ctaExternal
      ctaClassName="card-nav-cta--brand"
    />
  );
}
