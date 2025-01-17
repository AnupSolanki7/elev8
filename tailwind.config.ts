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
        primary: '#e13b3b',
        secondary: '#000000',
        accent: '#e13a3b',
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        heading: ['Teko', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
