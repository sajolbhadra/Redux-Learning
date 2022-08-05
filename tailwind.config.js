/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          
          primary: "#40BCF2",
                   
          secondary: "#818cf8",
                   
          accent: "#f472b6",
                   
          neutral: "#1B1E22",
                   
          "base-100": "#312B46",
                   
          info: "#2563eb",
                   
          success: "#34d399",
                   
          warning: "#FC901D",
                   
          error: "#dc2626",
         },
         
      },
      {
        dark: {
          primary: "#f43f5e",
          secondary: "#15803d",
          accent: "#c026d3",
          neutral: "#1B1E22",
          "base-100": "#312B46",
          info: "#fde047",
          success: "#854d0e",
          warning: "#6366f1",
          error: "#f5d0fe",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  
}
