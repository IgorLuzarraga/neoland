/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '72': '18rem',
        '1/10': '10%'
      },
      colors: {
        'header-color': '#ffcf01',
        'background-color': '#ffffff',
        'primary-color': '#111111',
      },
      fontSize: {
        headline: '4rem',
        'typography-h1': '3.5rem',
        'typography-h2': '2.25rem',
        'typography-h3': '1.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
}



