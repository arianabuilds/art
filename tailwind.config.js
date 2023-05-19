/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
}
