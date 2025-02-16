/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green': '#95EF58',
        'greenyellow' : '#B0EF58',
        'darkgreen' : '#388E06',
        'skin' : '#F3EBE0'

      },
      padding: {
        'custom': '16.5rem', // Now you can use p-custom
      },
      keyframes: {
        slide2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide2: "slide2 15s linear infinite", // <-- Add this
      },
    },
  },
  plugins: [],
}

