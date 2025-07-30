/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Space_Grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      keyframes: {
        scrollMarqueeL: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scrollMarqueeL: 'scrollMarqueeR 30s linear infinite',
      },
      keyframes: {
        scrollMarqueeR: {
          '-0%': { transform: 'translateX(-05%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        scrollMarqueeR: 'scrollMarqueeR 30s linear infinite',
      },
    },
  },
  plugins: [],
}
