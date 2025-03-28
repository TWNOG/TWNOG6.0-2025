import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'var(--font-geist-mono)', 'var(--font-noto-sans-tc)', 'var(--font-noto-sans-jp)', 'sans'],
        serif: ['var(--font-ibm-plex-serif), var(--font-noto-serif-tc)', 'var(--font-noto-serif-jp)', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
