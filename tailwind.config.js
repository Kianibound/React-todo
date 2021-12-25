module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'light-hero': "url('./images/bg-desktop-light.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
