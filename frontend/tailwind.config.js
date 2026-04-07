/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        purple:{
          600:"#675fb9",
          200:"#d2d6ee"

        },
        gray:{
          100:"#eeeeef",
          200:"#e6e9ed",
          600:"#95989c"
        }
      }
    },
  },
  plugins: [],
}

