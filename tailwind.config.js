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



          primary: "#61dafb",
          secondary: "#61dafb",

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
