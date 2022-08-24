/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,json}"],
  theme: {
    daisyui: {
      themes: [],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  
};
