/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mini: "1100px",
        mobile: "640px",
      },
      backgroundImage: {
        "back-1": "url('../public/bakgrnd.png')",
        "back-2": "url('../public/bakgrnd2.jpg')",
        "back-3": "url('../public/bakgrnd3.jpg')",
        "back-4": "url('../public/bakgrnd4.jpg')",
      },
    },
  },
  plugins: [],
};
