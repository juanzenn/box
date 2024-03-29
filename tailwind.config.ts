import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "var(--primary)" },
        foreground: { DEFAULT: "var(--foreground)" },
        background: { DEFAULT: "var(--background)" },
        popover: { DEFAULT: "var(--popover)" },
        "popover-foreground": { DEFAULT: "var(--popover-foreground)" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      animation: {
        grow: "grow 0.3s ease-in-out",
      },
      keyframes: {
        grow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;
