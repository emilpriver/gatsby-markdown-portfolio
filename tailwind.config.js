module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    extend: {
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },
      minHeight: {
        '44': '11rem',
        '64': '16rem'
      },
      colors: {
        'background': 'rgb(247, 242, 242)',
        'hero-dark': 'rgb(24,23,23)',
        'text-dark': '#606060',
        'twitter-blue': "rgb(152, 208, 255)",
        'spotify': "#62dbbe"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
