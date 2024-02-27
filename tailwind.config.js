/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        white: "hsl( 0, 0%, 100% )",
        black: "hsl( 0, 0%, 0% )",
        darkGray: "hsl( 0, 0%, 55% )",
        veryDarkGray: "hsl( 0, 0%, 41% )"
      },
      fontFamily: {
        josefinSans: [ "Josefin Sans", "sans-serif" ],
        alata: [ "Alata", "sans-serif" ]
      },
      fontWeight: {
        josefinSansLight: "300",
        alataRegular: "400",
      },
    },
    screens: {
      xs: "450px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}

