import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: "oklch(0.88 0.18 95)",
        orange: "oklch(0.75 0.19 50)",
        pink: "oklch(0.82 0.10 350)",
        "purple-deep": "oklch(0.22 0.13 320)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
        "float": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
