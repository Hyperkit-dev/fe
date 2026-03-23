"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "hyperkit-exit-intent-dismissed";

/**
 * Exit-intent overlay for conversion optimization.
 * Triggers when user moves cursor toward closing tab (top of viewport).
 * Dismissed state stored in sessionStorage to avoid repeat triggers.
 */
export function ExitIntentOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);
    return () => document.removeEventListener("mouseout", handleMouseLeave);
  }, []);

  const dismiss = () => {
    setShow(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={dismiss}
        >
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" aria-hidden />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full rounded-2xl border border-white/10 bg-slate-900/95 p-8 shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Before you go</h3>
            <p className="text-slate-400 text-sm mb-6">
              Join the waitlist to get early access to Hyperkit Studio and exclusive updates.
            </p>
            <div className="flex gap-3">
              <a
                href="https://waitlist.hyperkitlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl text-center text-sm font-medium bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all"
              >
                Join Waitlist
              </a>
              <button
                onClick={dismiss}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                Maybe later
              </button>
            </div>
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 p-1 text-slate-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
