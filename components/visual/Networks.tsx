"use client";

import React from "react";
import Image from "next/image";
import { GsapReveal } from "@/components/motion/gsap-reveal";
import { TRUSTED_NETWORK_LOGOS } from "@/lib/network-logos";

const LOGO_SIZE = 128;

const TrustedNetworks = () => (
  <GsapReveal className="w-full">
    <section className="border-b-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="mb-8 text-xs font-medium uppercase tracking-widest text-slate-400">
          Deploy instantly across trusted networks
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-60 grayscale transition-all duration-700 hover:grayscale-0 sm:gap-12 md:gap-16">
          {TRUSTED_NETWORK_LOGOS.map(({ src, alt }) => (
            <div
              key={src}
              className="group flex shrink-0 cursor-pointer items-center gap-3 transition-opacity hover:opacity-100"
            >
              <Image
                src={src}
                alt={alt}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
                sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </GsapReveal>
);

export default TrustedNetworks;
