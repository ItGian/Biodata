/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  darkMode: 'class',

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
    },
    animation: {
      "pulse": "pulse 1s ease-in-out",
      "hang": "hang 4s ease-in-out",
      typing: "typing 4s steps(20) infinite alternate, blink .7s infinite",
    },
    keyframes: {
      "pulse": {
        "0%": {
          "transform": "scale(1)"
        },
        "50%": {
          "transform": "scale(1.1)"
        },
        "100%": {
          "transform": "scale(1)"
        }
      },

      "hang": {
    "10%": {
      "transform": "translateY(-20px)"
    },
    "25%": {
      "transform": "translateY(0)"
    },
    "50%": {
      "transform": "translateY(-20px)"
    }
  },

  "typing": {
    "0%": {
      width: "0%",
      visibility: "hidden"
    },
    "100%": {
      width: "100%"
    }  
  },

  "blink": {
    "50%": {
      borderColor: "transparent"
    },
    "100%": {
      borderColor: "white"
    }  
  },

  },
  plugins: [ require('taos/plugin') ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  }
};
export default config;
