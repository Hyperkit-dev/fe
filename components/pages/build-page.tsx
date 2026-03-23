"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Code2, Zap, ExternalLink } from "lucide-react";

const DOCS_URL = "https://docs.hyperkitlabs.com";
const AI_STUDIO_URL = "https://ai.hyperkitlabs.com";

export default function BuildPage() {
  return (
    <div className="min-h-screen text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Builder Documentation
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Everything you need to build, test, and deploy AI-powered Web3 applications with Hyperkit.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-lg font-medium text-white mb-2 group-hover:text-purple-300 transition-colors">
              Documentation
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Guides, API references, and integration examples.
            </p>
            <span className="text-sm text-purple-400 flex items-center gap-1">
              Explore docs
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          <a
            href={AI_STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-lg font-medium text-white mb-2 group-hover:text-blue-300 transition-colors">
              AI Studio
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Generate smart contracts and deploy with AI assistance.
            </p>
            <span className="text-sm text-blue-400 flex items-center gap-1">
              Launch Studio
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          <Link
            href="/solutions"
            className="group block p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-orange-500/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-orange-400" />
            </div>
            <h2 className="text-lg font-medium text-white mb-2 group-hover:text-orange-300 transition-colors">
              Builder Grants
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Grants and rewards for developers building on Hyperkit.
            </p>
            <span className="text-sm text-orange-400 flex items-center gap-1">
              View grants
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <section className="border-t border-white/5 pt-12">
          <h2 className="text-2xl font-medium text-white mb-6">Quick start</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium hover:from-purple-600 hover:to-purple-700 transition-all"
            >
              Read the docs
            </a>
            <a
              href="https://waitlist.hyperkitlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/5 hover:text-white transition-all"
            >
              Join waitlist
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
