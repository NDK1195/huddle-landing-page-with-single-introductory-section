/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        violet: "hsl(257, 40%, 49%)",
        "soft-magenta": "hsl(300, 69%, 71%)",
      },
      boxShadow: {
        button: "1px 3px 5px 0px rgba(0, 0, 0, 0.27)",
      },
    },
  },
  plugins: [],
};
