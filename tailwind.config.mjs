/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'custom-bg': {
          light: '#f0f4f8',
          dark: '#1a1a2e',
        },
        'custom-primary': {
          light: '#415a77',
          dark: '#415a77',
        },
        'custom-secondary': {
          light: '#5e548e',
          dark: '#5e548e',
        },
        'custom-accent': {
          light: '#000',
          dark: '#fff',
        },
        'custom-text': {
          light: '#f0f4f8',
          dark: '#000000',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}