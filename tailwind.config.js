/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1200px",
      // => @media (min-width: 640px) { ... }

      mobile: "0px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        "background-color": "#fff",
        "text-color": "#1A1A1A",
        "dark-white-color": "#F2F2F2",
        "grey-color": "#CCCCCC",
        "red-color": "#FF5959",
      },
    },
  },
  plugins: [],
};
