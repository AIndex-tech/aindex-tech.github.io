/** @type {import('tailwindcss').Config} */
const { SERVER_FILES_MANIFEST } = require('next/dist/shared/lib/constants');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors'); // Import Tailwind's color palette

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        bg: {
          dark: "#111111",
          light: "#eeeeee",
          dark2nd: "#222222",
          light2nd: "#ffffff",
          darkBorder: "#dddddd",
          lightBorder: "#000000",
          lightBorder2nd: "#dbeafe",
        },
        text: {
          dark: colors.blue[300] + "CC", // CC = 80% in hex/dec
          light: colors.blue[900] + "CC",
          darkHover: colors.blue[300],
          lightHover: colors.blue[900],
        }
      },
      fontFamily: {
        sans: ["ggSansRegular", "sans-serif"],
        serif: ["ggSansRegular", "serif"],
        mono: ["ggSansRegular", "monospace"],
        bold: ["ggSansBold", "sans-serif"],
        medium: ["ggSansMedium", "sans-serif"],
        semi: ["ggSansSemibold", "sans-serif"],
      },
      spacing: {
        sm: "2px", // Small padding or margin
        md: "4px", // Medium padding or margin
        lg: "6px", // Large padding or margin
        xl: "9px", // eXtra large padding or margin
        xxl: "13px", // eXXtra large padding or margin
        xxxl: "17px", // eXXXtra large padding or margin
        bt: "23px", //bath tub size large padding or margin
      }
      /* textShadow: {
      //   lightblue: '2px 2px 4px rgba(173, 216, 230, 0.8)', // Hellblauer Schatten
      },*/
    },
  },
  plugins: [],
}

