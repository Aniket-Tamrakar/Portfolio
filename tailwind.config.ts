import type { Config } from "tailwindcss";
import plugin from "tailwind-scrollbar";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          '"SF UI Text"',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Oxygen"',
          '"Ubuntu"',
          '"Cantarell"',
          '"Open Sans"',
          "sans-serif",
        ],
      },
      scrollSnapType: {
        none: "none",
        x: "x mandatory",
        y: "y mandatory",
        both: "both mandatory",
      },
      scrollSnapAlign: {
        start: "start",
        end: "end",
        center: "center",
        none: "none",
      },
      keyframes: {
        circleAnimation: {
          "0%, 100%": { borderRadius: "50%" },
          "50%": { borderRadius: "0%" },
        },
        squareToX: {
          "0%, 100%": { transform: "rotate(0deg)", borderRadius: "0%" },
          "50%": { transform: "rotate(45deg)", borderRadius: "50%" },
        },
      },
      animation: {
        circleScroll: "circleAnimation 2s infinite",
        squareXScroll: "squareToX 2s infinite",
      },
    },
  },
  plugins: [
    plugin({ nocompatible: true }), // Enable custom scrollbar plugin
  ],
} satisfies Config;
