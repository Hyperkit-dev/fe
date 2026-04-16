"use client";

import { ArrowRight } from "lucide-react";
import { GsapReveal } from "@/components/motion/gsap-reveal";

const STUDIO_URL = "https://ai.hyperkitlabs.com";
const CONTACT_EMAIL = "mailto:hyperkitdev@gmail.com?subject=Hyperkit%20%20-%20%20workflow%20or%20pilot";

export default function CTASection() {
  return (
    <GsapReveal className="w-full">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight text-balance">
            From spec to deploy-ready - with evidence in between
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed text-pretty">
            Hyperkit orchestrates generation, static analysis, simulation, and deploy preparation so your team spends less time handoffs between tools. We are still hardening for repeat external runs - if you ship contracts often, Studio is the place to try the path, or email us for a structured pilot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center px-8 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030014]"
            >
              Open Studio
            </a>
            <a
              href={CONTACT_EMAIL}
              className="inline-flex min-h-11 items-center justify-center px-8 py-3 rounded-full text-slate-300 text-sm font-medium hover:text-white transition-colors gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030014]"
            >
              Pilot or questions <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </GsapReveal>
  );
}
