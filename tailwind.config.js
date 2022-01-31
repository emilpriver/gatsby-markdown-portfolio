module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    extend: {
      minHeight: {
        '64': '16rem'
      },
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },
      colors: {
        'hero-dark': 'rgb(24,23,23)',
        'text-dark': '#606060',
        'twitter-blue': "rgb(152, 208, 255)",
        'spotify': "#62dbbe"
      }
    },
  },
  plugins: [],
}
