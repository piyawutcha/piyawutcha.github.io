/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cover': "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)),url('./assets/home_bg.jpg')",
      },
      colors: {
        'main': "#282c34",
      },
      animation: {

      },
      keyframes: {

      },
      screens: {

      }
    },
  },
  plugins: [],
}

