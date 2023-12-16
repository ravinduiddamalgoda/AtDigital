/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: ({ colors }) => ({
        primaryBG: "#6B3CC9",
        secondaryBG: "#F28D35",
        analogous1: "#6A44F2",
        analogous: "#1CBDDD",
        triadic: "#52378C",
        lgGreen : "#4DCA79" ,
        textTRICORN : "#2F2F2F" ,
        textAcierLight : "#545A75" ,
        textAcierSubtle : "#9C9991" ,
      }),
    },
  },
  plugins: [],
}

