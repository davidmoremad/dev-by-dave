/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#4400ff',
        secondary: '#682fff',
        dark: {
          background: '#121212',
          surface: '#282828',
          text: '#F9F9F9',
          subtext: '#A0A0A0'
        },
        light: {
          background: '#F9F9F9',
          surface: '#E5E5E5',
          text: '#121212',
          subtext: '#A0A0A0',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}