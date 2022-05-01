
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        water: ['Water Brush']
      },
      backgroundImage: {
        'weather-image': "url('/src/assets/small.jpg')"
      }
    },
  },
  plugins: [],
}