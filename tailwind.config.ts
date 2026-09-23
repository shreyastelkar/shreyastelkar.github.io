import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        fg: "var(--fg)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        rule: "var(--rule)",
      },
    },
  },
  plugins: [],
};
export default config;
