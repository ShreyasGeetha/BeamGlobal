module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'orangeHair': '#A95E2F',
      'orangeConstrastText': '#E9FFEA'
    }
    },
    fontFamily: {
      'sans': ['PwC Helvetica Neue', 'Arial', 'sans-serif'],
      'roboto': ['Roboto'],
      'charter': ['PwC ITC Charter', 'Georgia', 'Serif'],
      'Helvetica': ['PwC Helvetica Neue', 'Arial', 'Sans-Serif'],
      'handwriting': ['Vujahday Script'],
    },    
  },
  plugins: [],
}