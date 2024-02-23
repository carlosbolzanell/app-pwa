/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "fundo": "#FEFAE0",
        'verde': '#ADC178',
        "cinza-claro": "#979191",
        "cinza-escuro": "#614F4F",
        "linha": "#CCC1C1"
      }
    },
  },
  plugins: [],
}

