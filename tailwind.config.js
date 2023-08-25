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
          50: '#e6f6ff',
          100: '#c2def1',
          200: '#9dc4e1',
          300: '#78a8d4',
          400: '#538cc7',
          500: '#396fad',
          600: '#2b5387',
          700: '#1d4062',
          800: '#0d2b3d',
          900: '#00121a',
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
      backgroundImage: {
        hero: "linear-gradient(rgb(0 0 0 / 85%),rgb(0 0 0 / 85%)), url(/images/8.jpg)"
      },
      keyframes: {
        bounce: {
          "0%, 4%, 10%, 16%, 20%": { transform: 'translateY(0)' },
          "8%": { transform: 'translateY(-20px)' },
          "12%": { transform: 'translateY(-10px)' },
          "100%": { transform: 'translateY(0)' }
        },
        bounceTwo: {
          "5%": { transform: 'scale(1.2)' },
          "6.67%, 10%": { transform: 'rotate(-20deg) scale(1.2)' },
          "8.33%": { transform: 'rotate(20deg) scale(1.2)' },
          "11.67%": { transform: 'rotate(0deg) scale(1.2)' },
          "16.67%": { transform: 'scale(1)' },
          "100%": { transform: 'scale(1)' }
        },
        bounceThree: {
          "5%": { transform: 'scale(1.2) translateY(-20px)' },
          "16.67%": { transform: 'scale(1)' },
          "100%": { transform: 'scale(1)' }
        },
        wide: {
          "0%":{transform: 'scale(1)'},
          "50%": { transform: 'scale(1.2) translateY(20px)' },
          "100%":{transform: 'scale(1)'}
        }
      },
    },
    animation: {
      bounce: "bounce 10s alternate ease infinite",
      bounceTwo: "bounceTwo 6s alternate ease infinite",
      bounceThree: "bounceThree 12s alternate ease infinite",
      wide: "wide 15s alternate ease infinite"
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
