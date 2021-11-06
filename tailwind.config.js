module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screen: {
        '3xl': '2000px',
      },
      backgroundImage: {
        'hero-image':
          "linear-gradient(to bottom, rgba(0,0,0,0.8),rgba(0,0,0,0.5)), url('/images/home.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
