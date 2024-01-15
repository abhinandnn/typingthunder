/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lgr': '#e6e6e6',
        'dgr': '#b3b3b3',
        'err': '#FF7E7E',
        'dkr': '#1a1a1a'

      },
      screens: {
        'mob': '485px'
      }
    },
  },
  plugins: [],
}
