"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { GsapReveal } from "@/components/motion/gsap-reveal";
import { LogoCarousel, type LogoCarouselItem } from "@/components/ui/logo-carousel";
import { BRAND_LOGO_GROUPS, type TrustedNetworkLogo } from "@/lib/network-logos";

const LOGO_SIZE = 128;

function getLogoPresentation(
  logo: TrustedNetworkLogo,
  variant: "default" | "carousel" = "default"
): { className: string } {
  const compact = variant === "carousel";

  const baseSquare = compact
    ? "h-10 w-10 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12 transition-opacity duration-700"
    : "h-20 w-20 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28 transition-opacity duration-700";
  const baseWideXlarge = compact
    ? "h-9 w-auto max-w-[min(calc(100vw-2rem),170px)] object-contain object-center sm:h-10 sm:max-w-[195px] md:h-12 md:max-w-[220px] transition-opacity duration-700"
    : "h-11 w-auto max-w-[min(calc(100vw-3rem),260px)] object-contain object-center sm:h-12 sm:max-w-[280px] md:h-14 md:max-w-[320px] transition-opacity duration-700";
  const baseWideLarge = compact
    ? "h-6 w-auto max-w-[120px] object-contain object-center sm:h-7 sm:max-w-[140px] md:h-8 md:max-w-[160px] transition-opacity duration-700"
    : "h-9 w-auto max-w-[min(calc(100vw-3rem),220px)] object-contain object-center sm:h-10 sm:max-w-[260px] md:h-12 md:max-w-[300px] transition-opacity duration-700";
  const baseWideMedium = compact
    ? "h-5 w-auto max-w-[100px] object-contain object-center sm:h-6 sm:max-w-[115px] md:h-7 md:max-w-[130px] transition-opacity duration-700"
    : "h-8 w-auto max-w-[min(calc(100vw-3rem),190px)] object-contain object-center sm:h-9 sm:max-w-[220px] md:h-10 md:max-w-[250px] transition-opacity duration-700";

  if (logo.horizontalWordmark) {
    const wide =
      logo.horizontalWordmarkSize === "medium"
        ? baseWideMedium
        : logo.horizontalWordmarkSize === "xlarge"
          ? baseWideXlarge
          : baseWideLarge;
    const mono = logo.monoWhite ? " brightness-0 dark:invert" : "";
    return {
      className: `${wide}${mono} opacity-95 hover:opacity-100`,
    };
  }
  if (logo.monoWhite) {
    return {
      className: `${baseSquare} opacity-95 hover:opacity-100 brightness-0 dark:invert`,
    };
  }
  if (logo.fullColor) {
    return {
      className: `${baseSquare} opacity-95 hover:opacity-100`,
    };
  }
  return {
    className: `${baseSquare} grayscale opacity-90 hover:grayscale-0 hover:opacity-100`,
  };
}

function NetworkLogoImage({
  logo,
  variant = "default",
}: {
  logo: TrustedNetworkLogo;
  variant?: "default" | "carousel";
}) {
  const { className } = getLogoPresentation(logo, variant);
  const iw = logo.intrinsicSize?.width ?? LOGO_SIZE;
  const ih = logo.intrinsicSize?.height ?? LOGO_SIZE;
  const compact = variant === "carousel";
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={iw}
      height={ih}
      className={className}
      sizes={
        compact
          ? logo.horizontalWordmark
            ? logo.horizontalWordmarkSize === "medium"
              ? "(max-width: 640px) 100px, (max-width: 768px) 115px, 130px"
              : logo.horizontalWordmarkSize === "xlarge"
                ? "(max-width: 640px) 170px, (max-width: 768px) 195px, 220px"
                : "(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
            : "(max-width: 640px) 40px, (max-width: 768px) 44px, 48px"
          : logo.horizontalWordmark
            ? logo.horizontalWordmarkSize === "medium"
              ? "(max-width: 640px) 190px, (max-width: 768px) 220px, 250px"
              : logo.horizontalWordmarkSize === "xlarge"
                ? "(max-width: 640px) 260px, (max-width: 768px) 280px, 320px"
                : "(max-width: 640px) 220px, (max-width: 768px) 260px, 300px"
            : "(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
      }
    />
  );
}

function LogoRow({
  logos,
}: {
  logos: (typeof BRAND_LOGO_GROUPS)[number]["logos"];
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-14">
      {logos.map((logo) => (
        <div
          key={logo.src.toString()}
          className="group flex shrink-0 cursor-default items-center gap-3"
        >
          <NetworkLogoImage logo={logo} />
        </div>
      ))}
    </div>
  );
}

function NetworkLogoCarousel({
  logos,
}: {
  logos: readonly TrustedNetworkLogo[];
}) {
  const items: LogoCarouselItem[] = useMemo(
    () =>
      logos.map((logo, index) => ({
        id: `${String(logo.src)}-${index}`,
        name: logo.alt,
        content: <NetworkLogoImage logo={logo} variant="carousel" />,
      })),
    [logos]
  );

  return (
    <LogoCarousel
      items={items}
      columnCount={3}
      className="mx-auto max-w-5xl"
    />
  );
}

const TrustedNetworks = () => (
  <GsapReveal className="w-full">
    <section
      className="border-b border-slate-200/80 py-12 dark:border-white/5"
      aria-labelledby="ecosystem-partners-heading"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-400">
          Ecosystem &amp; networks
        </p>
        <h2
          id="ecosystem-partners-heading"
          className="mx-auto mb-3 max-w-2xl text-lg font-medium tracking-tight text-slate-900 dark:text-white sm:text-xl"
        >
          Integrations and chains behind Hyperkit workflows
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-xs text-slate-500 sm:text-sm">
          Partners and networks we wire into the delivery stack; breadth grows as each integration
          meets the same reliability bar as the core Studio path.
        </p>

        <div className="flex flex-col gap-14 md:gap-16">
          {BRAND_LOGO_GROUPS.map((group) => (
            <div key={group.id} className="text-center">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                {group.title}
              </h3>
              <p className="mx-auto mb-8 max-w-xl text-xs text-slate-500 sm:text-sm">
                {group.description}
              </p>
              {group.id === "networks" ? (
                <NetworkLogoCarousel logos={group.logos} />
              ) : (
                <LogoRow logos={group.logos} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </GsapReveal>
);

export default TrustedNetworks;
