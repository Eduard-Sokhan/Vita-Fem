/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'dark',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        lt: '320px',
        sm: '480px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
      },
      colors: {
        light: {
          pink: '#a855f7',
          DEFAULT: '#9333ea',
          purple: '#6b21a8',
        },
        dark: {
          lightBlue: '#38bdf8',
          DEFAULT: '#0ea5e9',
          blue: '#0369a1',
        },
      },
      fontFamily: {
      },
      spacing: {

      },
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  plugins: [],
};
