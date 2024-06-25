/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'h-sm': { 'raw': '(min-height: 600px)' },
        'h-md': { 'raw': '(min-height: 800px)' },
        'h-lg': { 'raw': '(min-height: 1000px)' },
      },
    },
  },
  plugins: [],
  //important: true,
}

