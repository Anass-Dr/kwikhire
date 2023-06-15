/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
      gridRowEnd: {
        9: "9",
      },
      height: {
        calc: "calc(100vh - 230px)",
      },
    },
  },
  plugins: [],
};
