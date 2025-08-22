/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust paths as needed
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cover': "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)),url('./assets/home_bg.jpg')",
        'experience': "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)),url('./assets/workexp_bg.jpg')",
      },
      colors: {
        'main': "#282c34",
        'contact': "#ec0856",
        'dark': '#000000',
        'light': '#ffffff',
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

