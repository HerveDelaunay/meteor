
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
      },
      colors: {
        'blueG': '#8EC5FC',
        'purpleG': '#C850C0',
        'yellowG': '#E0C3FC'
      }
    },
  },
  plugins: [],
}