/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#121212",
        btncolor: "rgba(0,0,0,.7)",
        subtext: "#a7a7a7",
        iconbtn: "#292929",
        primary: "#ddd",
        secondarycol: "#999",
        greenco: "#2d5",
        hrco: "rgb(41, 41, 41)",
        bghover: "hsla(0,0%,100%,.1)",
        bglight: "hsla(0,0%,100%,.07)",
        bgicon: "hsla(0,0%,100%,.09)",
      },
    },
  },
  plugins: [],
};
