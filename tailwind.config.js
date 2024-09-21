/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "640px",
        // => @media (min-width: 640px) { ... }

        mobile: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
      colors: {
        "background-color": "#fff",
        "text-color": "#1A1A1A",
        "dark-white-color": "#F2F2F2",
        "grey-color": "#CCCCCC",
        "red-color": "##FF5959",
      },
    },
  },
  plugins: [],
};
