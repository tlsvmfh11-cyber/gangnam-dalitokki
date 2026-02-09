/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'neon-purple': '#9D00FF',
        primary: '#0D0D0D',
      },
      fontFamily: {
        heading: ['Do Hyeon', 'sans-serif'],
        body: ['Nanum Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
