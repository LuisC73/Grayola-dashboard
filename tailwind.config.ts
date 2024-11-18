import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9AFF1A",
        secondary: "#D06CFF",
        tertiary: '#8DFFE9'
      },
      backgroundImage: {
        custom: "url('/images/background.svg')",
        decorate: "url('/images/decorate-bg.png')",
        planet: "url('/images/planet.png')"
      },
      boxShadow: {
        button: "0px 4px 0px 0px #000000"
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
} satisfies Config;
