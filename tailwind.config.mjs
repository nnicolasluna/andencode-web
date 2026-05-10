/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#fab306",
        "primary-dark": "#f6a007",
        "brand-dark": "#000015",
        "brand-navy": "#142030",
        "brand-deep": "#151f2f",
        "brand-midnight": "#010310",
      },
      fontFamily: {
        audiowide: ["Audiowide", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
