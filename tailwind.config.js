// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '::selection': {
          backgroundColor: '#7a4191', // Purple color
          color: '#ffffff',           // White text
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
