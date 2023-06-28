/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      width: {
        730: '45.625rem'
      },
      height: {
        48: '3rem',
        50: '3.75rem'
      },
      colors: {
        light: {
          accent: '#0079FF',
          background: '#F6F8FF',
          box: '#FEFEFE',
          title: '#2B3442',
          paragraph: {
            100: '#4B6A9B',
            200: '#697C9A'
          },
          shadow: 'rgba(70, 96, 187, 0.10)'
        },
        dark: {
          accent: '#0079FF',
          background: '#141D2F',
          box: '#1E2A47',
          paragraph: '#FFFFFF'
        }
      }
    }
  },
  plugins: []
};
