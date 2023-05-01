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
            50: '#e3eeff',
            100: '#b6cdfe',
            200: '#88abf7',
            300: '#5b8af1',
            400: '#2d69ec',
            500: '#134fd2',
            600: '#0b3da4',
            700: '#052c77',
            800: '#001a4a',
            900: '#00091e',
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
