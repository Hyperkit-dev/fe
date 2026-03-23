"use client";

import { useState, useEffect, useCallback } from "react";

const THROTTLE_MS = 100;

/**
 * Throttled scroll position for navbar glassmorphism.
 * Prevents excessive re-renders during scroll (professional standard).
 */
export function useThrottledScroll(threshold = 20) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastRun = 0;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(1, y / docHeight) : 0);
      setIsScrolled(y > threshold);
      ticking = false;
    };

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastRun >= THROTTLE_MS) {
        lastRun = now;
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      } else if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          lastRun = Date.now();
          update();
        });
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isScrolled, scrollProgress };
}
