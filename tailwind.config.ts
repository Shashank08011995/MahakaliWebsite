import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Logo-inspired palette: pink, green, black accents on a warm cream base.
        saffron: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
          950: "#ffffff",
        },
        marigold: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#9ebd77",
          600: "#7a9a5e",
          700: "#5f7a4b",
          800: "#4e613e",
          900: "#415133",
          950: "#1f2e19",
        },
        sindoor: {
          DEFAULT: "#d2519e",
          dark: "#b03d7f",
        },
        ink: {
          DEFAULT: "#000000",
          soft: "#333333",
          muted: "#666666",
        },
        cream: {
          DEFAULT: "#f9f9f9",
          deep: "#e8e8e8",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        devanagari: ["var(--font-tiro)", "serif"],
      },
      backgroundImage: {
        "gradient-saffron":
          "linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #ffffff 100%)",
        "gradient-cream":
          "#f5f5f5",
      },
      boxShadow: {
        soft: "0 6px 24px -10px rgba(167, 42, 31, 0.15)",
        glow: "0 0 40px -10px rgba(245, 144, 11, 0.4)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        flicker: "flicker 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
