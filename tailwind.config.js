/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // textShadow: {
      //   lightblue: '2px 2px 4px rgba(173, 216, 230, 0.8)', // Hellblauer Schatten
      //},
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.shadow-3d': {
          textShadow: '3px 3px 5px rgba(173, 216, 230, 0.8)',
        },
      });
    }),
  ],
}

