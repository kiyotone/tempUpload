/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mini": "1100px",
        "mobile": "640px",
      },
    },
  },
  plugins: [],
}

