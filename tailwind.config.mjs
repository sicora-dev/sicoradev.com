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
      backgroundImage: {
        'light-shiny': 'radial-gradient(600px circle #dfdfdf, transparent 70%)',
        'dark-shiny': 'radial-gradient(600px circle #272727, transparent 70%)',
      },
      colors: {
        light: {
          background: "#FFFCF2",
          secondary: "#CCC5B9",
          text: "#090909",
          buttons: "#EB5E28",
          highlight: "#7FDBFF",
        },
        dark: {
          background: "#252422",
          secondary: "#403D39",
          text: "#CCC5B9",
          buttons: "#EB5E28",
          highlight: "#7FDBFF",
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
