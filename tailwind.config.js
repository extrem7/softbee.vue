module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy'],
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
  },
  plugins: [],
}
