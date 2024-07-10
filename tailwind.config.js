/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#03045B',
        mainTextColor: '#333',
        subTextColor: '#666',
        colorWhite: '#fff',
      },
    },
  },
  plugins: [],
};

