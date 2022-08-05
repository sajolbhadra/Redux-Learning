/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#334155",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          own: "#fff",
          "base-100": "#ffffff",
        },
      },
      "mytheme",
      // "winter",
      // "cupcake",
    ],
  },
}
