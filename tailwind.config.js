/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "876px",
        xs: "375px",
      },
    },
  },
  plugins: [],
};
