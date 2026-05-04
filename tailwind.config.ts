import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Spiritual palette: deep saffron, marigold, gold accents on a warm cream base.
        saffron: {
          50: "#fef7ee",
          100: "#fdecd6",
          200: "#fad5ad",
          300: "#f6b779",
          400: "#f1934a",
          500: "#ec7728",
          600: "#dd5e1e",
          700: "#b7461b",
          800: "#92391e",
          900: "#76311b",
          950: "#40160a",
        },
        marigold: {
          50: "#fffaeb",
          100: "#fef0c7",
          200: "#fde08a",
          300: "#fcc94d",
          400: "#fbb024",
          500: "#f5900b",
          600: "#d96b06",
          700: "#b44a09",
          800: "#92390e",
          900: "#78300f",
          950: "#451703",
        },
        sindoor: {
          DEFAULT: "#a72a1f",
          dark: "#7a1d15",
        },
        ink: {
          DEFAULT: "#2a1f1a",
          soft: "#4a3a32",
          muted: "#6b5a50",
        },
        cream: {
          DEFAULT: "#fff8f0",
          deep: "#fbeedb",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        devanagari: ["var(--font-tiro)", "serif"],
      },
      backgroundImage: {
        "gradient-saffron":
          "linear-gradient(135deg, #ec7728 0%, #f5900b 50%, #fbb024 100%)",
        "gradient-cream":
          "linear-gradient(180deg, #fff8f0 0%, #fbeedb 100%)",
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
