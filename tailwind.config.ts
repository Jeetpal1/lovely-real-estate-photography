// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fbb42f",
        secondary: "#22c55e",
        accent: "#ff6347",
        background: "#f8f9fa",
        text: "#333333",
        "text-light": "#ffffff",
        neutral: "#e2e8f0",
      },
    },
  },
  plugins: [],
};

export default config;

