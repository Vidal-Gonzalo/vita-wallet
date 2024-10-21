/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#167287",
        secondary: "#05BCB9",
        error: "#CE3434",
        primaryGray: "#B9C1C2",
        secondaryGray: "#DEE0E0",
        white: "#F9F9FA",
      },
      backgroundColor: {
        primaryColor: "#167287",
        secondaryColor: "#05BCB9",
        error: "#CE3434",
        primaryGray: "#B9C1C2",
        secondaryGray: "#DEE0E0",
        tertiaryGray: "#F5F6F6",
        primaryGradient: "linear-gradient(90deg, #05BCB9 0%, #167287 100%)",
        white: "#F9F9FA",
      },
      backgroundImage: {
        primary: "linear-gradient(90deg, #05BCB9 0%, #167287 100%)",
        sidebarBackground: "url('/assets/illustrations/coins.png')",
      },
      borderColor: {
        secondaryGray: "#DEE0E0",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
