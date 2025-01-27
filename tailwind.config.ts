import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        hue: {
          DEFAULT: "#571244",
          light: "#5712441A",
          dark: "#11040E",
        },
        orange: "#EF4353"
      },
    },
  },
  plugins: [],
} satisfies Config;
