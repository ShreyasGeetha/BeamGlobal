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
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '854px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}