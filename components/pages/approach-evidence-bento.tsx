"use client";

/**
 * Kokonut Bento Grid–style asymmetric layout + staggered entrance (motion/react pattern from kokonutui bento-grid).
 */
import React from "react";
import Link from "next/link";
import { ClipboardCheck, KeyRound, LineChart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { ReleaseBoundaryCard } from "@/components/pages/solution-release-boundary";
import { cn } from "@/lib/utils";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const tileClass =
  "rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6 flex flex-col min-h-0 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]";

export function ApproachEvidenceBento() {
  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 max-w-6xl mx-auto",
        "md:items-stretch"
      )}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-48px" }}
    >
      <motion.div className="md:col-span-12" variants={item}>
        <ReleaseBoundaryCard />
      </motion.div>

      <motion.article className={cn(tileClass, "md:col-span-5")} variants={item}>
        <div className="flex items-center gap-2 text-violet-300 mb-3">
          <ClipboardCheck className="w-5 h-5 shrink-0" aria-hidden />
          <h3 className="text-lg font-medium text-white">Validation &amp; ICP</h3>
        </div>
        <p className="text-sm text-slate-400 leading-snug mb-3">
          We recruit <span className="text-slate-300">high-fit</span> teams (fast shipping cadence,
          multi-chain or chain-adjacent work, recurring audit or simulation spend) through warm
          intros and cold outreach so learning is not only from friendly circles.
        </p>
        <p className="text-sm text-slate-400 leading-snug">
          Interviews record pain, spend, workarounds, and adoption intent in structured
          categories. A stated <span className="text-slate-300">falsification rule</span> applies: if
          high-fit interviews fail to confirm recurring pain or spend at the threshold we set, we
          treat the workflow hypothesis as false for that segment, not as something we market through
          anyway.
        </p>
      </motion.article>

      <motion.article className={cn(tileClass, "md:col-span-7")} variants={item}>
        <div className="flex items-center gap-2 text-indigo-300 mb-3">
          <KeyRound className="w-5 h-5 shrink-0" aria-hidden />
          <h3 className="text-lg font-medium text-white">BYOK &amp; security posture</h3>
        </div>
        <p className="text-sm text-slate-400 leading-snug mb-3">
          Model keys follow a <span className="text-slate-300">bring-your-own-key</span> design:
          request-scoped use where configured, encryption at rest, gateway authentication on API
          paths, and rate limits on sensitive routes, so custody risk is reduced relative to
          long-lived server-side key storage.
        </p>
        <p className="text-sm text-slate-400 leading-snug flex gap-2 mt-auto">
          <Shield className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden />
          <span>
            That is <span className="text-slate-300">design intent and partial implementation
            proof</span>, not a claim of completed enterprise security certification. Gap items
            (rotation, full fail-closed proof everywhere) remain on the hardening register.
          </span>
        </p>
      </motion.article>

      <motion.article className={cn(tileClass, "md:col-span-8")} variants={item}>
        <div className="flex items-center gap-2 text-emerald-300/90 mb-3">
          <LineChart className="w-5 h-5 shrink-0" aria-hidden />
          <h3 className="text-lg font-medium text-white">Market model (workflow spend)</h3>
        </div>
        <p className="text-sm text-slate-400 leading-snug">
          We size opportunity using <span className="text-slate-300">workflow spend</span>, audit,
          simulation, coordination time, deploy-prep overhead, not TVL as a software budget proxy.
          Published SAM/SOM-style figures in our materials are{" "}
          <span className="text-slate-300">assumption-led models</span> for discipline and
          prioritization, not reported revenue or a claim that the market is already captured.
        </p>
      </motion.article>

      <motion.article className={cn(tileClass, "md:col-span-4")} variants={item}>
        <h3 className="text-lg font-medium text-white mb-3">Founder governance</h3>
        <p className="text-sm text-slate-400 leading-snug">
          Execution is <span className="text-slate-300">founder-led</span> with explicit guardrails:
          validate one painful workflow before widening platform surface, track{" "}
          <Link href="/glossary" className="text-violet-300/90 underline underline-offset-2">
            qualified usage
          </Link>{" "}
          over vanity metrics, and widen scope only after repeated pain shows up across multiple
          high-fit teams, per the ownership model described in technical documentation.
        </p>
      </motion.article>

      <motion.article
        className="md:col-span-12 rounded-2xl border border-dashed border-white/15 bg-transparent p-5 md:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
        variants={item}
      >
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">
          Pricing &amp; billing
        </h3>
        <p className="text-sm text-slate-500 leading-snug max-w-3xl">
          The public{" "}
          <Link href="/pricing" className="text-violet-300/90 underline underline-offset-2">
            pricing page
          </Link>{" "}
          summarizes the published tier hypothesis (included runs, overages on high-value workflow
          events, BYOK on paid tiers, async support ladder, details in technical documentation). Live checkout and
          billing availability follow roadmap validation; any numbers remain subject to change, not a
          promise of current billing reality.
        </p>
      </motion.article>
    </motion.div>
  );
}
