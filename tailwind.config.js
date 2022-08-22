/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,json}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],
  daisyui: {
    themes: [

    ],
  },
}
