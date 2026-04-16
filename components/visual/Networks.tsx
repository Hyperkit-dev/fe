"use client";

import React, { type CSSProperties } from "react";
import Image from "next/image";
import { GsapReveal } from "@/components/motion/gsap-reveal";
import { BRAND_LOGO_GROUPS, type TrustedNetworkLogo } from "@/lib/network-logos";

const LOGO_SIZE = 128;

/** Dark / full-color PNGs on purple-black: force a reliable light mark */
const MONO_WHITE_FILTER: CSSProperties = {
  filter: "brightness(0) invert(1)",
  WebkitFilter: "brightness(0) invert(1)",
};

function getLogoPresentation(logo: TrustedNetworkLogo): {
  className: string;
  style?: CSSProperties;
} {
  const base =
    "h-20 w-20 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28 transition-opacity duration-700";
  if (logo.monoWhite) {
    return {
      className: `${base} opacity-95 hover:opacity-100`,
      style: MONO_WHITE_FILTER,
    };
  }
  return {
    className: `${base} grayscale opacity-90 hover:grayscale-0 hover:opacity-100`,
  };
}

function LogoRow({
  logos,
}: {
  logos: (typeof BRAND_LOGO_GROUPS)[number]["logos"];
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-14">
      {logos.map((logo) => {
        const { className, style } = getLogoPresentation(logo);
        return (
          <div
            key={logo.src.toString()}
            className="group flex shrink-0 cursor-default items-center gap-3"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              className={className}
              style={style}
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
            />
          </div>
        );
      })}
    </div>
  );
}

const TrustedNetworks = () => (
  <GsapReveal className="w-full">
    <section className="border-b border-white/5 py-12"
      aria-labelledby="ecosystem-partners-heading"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
          Ecosystem &amp; networks
        </p>
        <h2
          id="ecosystem-partners-heading"
          className="mx-auto mb-12 max-w-2xl text-lg font-medium tracking-tight text-white sm:text-xl"
        >
          Integrations and chains behind Hyperkit workflows
        </h2>

        <div className="flex flex-col gap-14 md:gap-16">
          {BRAND_LOGO_GROUPS.map((group) => (
            <div key={group.id} className="text-center">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-200">
                {group.title}
              </h3>
              <p className="mx-auto mb-8 max-w-xl text-xs text-slate-500 sm:text-sm">
                {group.description}
              </p>
              <LogoRow logos={group.logos} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </GsapReveal>
);

export default TrustedNetworks;
