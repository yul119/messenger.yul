module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        primaryColor: '#308fff',
      },
      gridTemplateRows: {
        // mobile layout
        mobile: '1fr 3fr',
      },
      gridTemplateColumns: {
        // desktop layout
        desktop: '1fr 3fr',
      },
    },
  },
  plugins: [],
};
