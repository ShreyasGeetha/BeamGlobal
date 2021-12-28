module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'orangeHair': '#A95E2F',
      'orangeConstrastText': '#E9FFEA',
      'lightGreen': '#15323A',
    }
    },
    fontFamily: {
      'sans': ['PwC Helvetica Neue', 'Arial', 'sans-serif'],
      'roboto': ['Roboto'],
      'charter': ['PwC ITC Charter', 'Georgia', 'Serif'],
      'Helvetica': ['PwC Helvetica Neue', 'Arial', 'Sans-Serif'],
      'handwriting': ['Vujahday Script'],
      'sofia': ['sofia-pro'],
    },    
  },
  plugins: [],
}