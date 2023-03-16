/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'md': '.9rem',
      },
      colors: {
        primary: {
          '50': '#eceeff',
          '100': '#dddfff',
          '200': '#c1c4ff',
          '300': '#9c9dff',
          '400': '#8075ff',
          '500': '#7055ff',
          '600': '#6336f5',
          '700': '#5529d9',
          '800': '#4524af',
          '900': '#322075',
        },
        accent: {
          '50': '#fffaeb',
          '100': '#fef1c7',
          '200': '#fee289',
          '300': '#fdca40',
          '400': '#fcb823',
          '500': '#f79609',
          '600': '#da6f05',
          '700': '#b54d08',
          '800': '#933b0d',
          '900': '#79310e',
        },
      },
      ringWidth: {
        '3': '3px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
  },
  plugins: [],
}
