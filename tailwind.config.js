/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "rgba(15, 207, 236, 1)",
          secondary: "rgba(25, 211, 174, 1)",
          accent: "rgba(25, 211, 174, 1)",
          neutral: "rgba(58, 66, 86, 1)",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
