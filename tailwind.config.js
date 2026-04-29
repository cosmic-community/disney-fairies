/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pixie: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        circus: {
          red: '#c41e3a',
          orange: '#ff7f00',
          gold: '#d4af37',
        }
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['Quicksand', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(180deg, #052e16 0%, #14532d 50%, #166534 100%)',
        'sparkle': 'radial-gradient(circle, rgba(252,211,77,0.3) 0%, transparent 70%)',
      },
      animation: {
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}