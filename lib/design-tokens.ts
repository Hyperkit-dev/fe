/**
 * Hyperkit design tokens  -  single source of truth for colors, spacing, radius, motion.
 * Use these in components and Tailwind @theme for consistency.
 */
export const tokens = {
  color: {
    background: {
      base: "#030014",
      surface: "#0F0E1D",
      elevated: "#02010a",
      card: "rgba(255,255,255,0.02)",
      cardHover: "rgba(255,255,255,0.04)",
    },
    border: {
      subtle: "rgba(255,255,255,0.05)",
      default: "rgba(255,255,255,0.1)",
      emphasis: "rgba(255,255,255,0.15)",
    },
    text: {
      primary: "#F1F5F9",
      secondary: "#b8c5d6",
      muted: "#9ca9bc",
    },
    accent: {
      primary: "#7c3aed",
      primaryLight: "#8b5cf6",
      primaryGlow: "rgba(124,58,237,0.5)",
      blue: "#3b82f6",
      cyan: "#06b6d4",
      orange: "#f97316",
      green: "#22c55e",
    },
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.25rem",
    full: "9999px",
  },
  shadow: {
    nav: "0 4px 30px rgba(0,0,0,0.1)",
    cta: "0 0 20px -5px rgba(124,58,237,0.5)",
  },
  motion: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
  },
  layout: {
    readingWidth: "65ch",
    legalContentMax: "65ch",
  },
} as const;
