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
      baseColor="rgba(15, 14, 29, 0.94)"
      menuColor="#e2e8f0"
      ease="power3.out"
      ctaHref="https://ai.hyperkitlabs.com"
      ctaLabel="Launch Studio"
      ctaExternal
      ctaClassName="card-nav-cta--brand"
    />
  );
}
