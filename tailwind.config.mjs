/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        title: ["Syne", "sans-serif"],
      },

      colors: {
        light: {
          background: "#FFFCF2",
          secondary: "#CCC5B9",
          text: "#252422",
          buttons: "#EB5E28",
          highlight: "#004BA8",
        },
        dark: {
          background: "#252422",
          secondary: "#004BA8",
          text: "#CCC5B9",
          buttons: "#EB5E28",
          highlight: "#FFFCF2",
        },
      },
    },
  },
  plugins: [],
};
