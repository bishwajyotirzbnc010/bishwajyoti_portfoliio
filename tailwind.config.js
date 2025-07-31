// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // make sure your files are included
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-filters'),],
};
