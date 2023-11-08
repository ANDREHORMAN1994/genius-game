/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-initial': 'rgba(5, 0, 255, 0.60)',
        'gradient-middle': 'rgba(127, 53, 53, 0.60)',
        'gradient-final': 'rgba(99, 241, 5, 0.12)',
        'text-title': '#89C3FF',
        'text-normal': 'rgba(255, 255, 255, 0.70)',
      },
      fontFamily: {
        'normal': ['Jomhuria', 'sans-serif'],
        'title': ['Knewave', 'serif'],
      },
    },
  },
  plugins: [],
}
