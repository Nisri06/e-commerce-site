/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#123456', // Replace with Figma color code
        secondary: '#654321',
        background: '#f5f5f5',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '72': '18rem', // Customize according to Figma’s spacing units
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};

