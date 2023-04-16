/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:
    {
      fontFamily: {
        'monte':['Montserrat','sans-serif'],
        'roboto':['Roboto Slab','sans-serif'],
        'great-vibes': ['Great Vibes', 'sans-serif']
      },

      backgroundImage:{
        circulardark:'repeating-radial-gradient(rgba(255,255,255,0.2) 4px, rgba(0,0,30) 10px,  rgba(0,0,0) 100px );'
      }
    },
  },
  plugins: [],
}

