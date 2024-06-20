/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customColor1: "#F075AA",
        customColor2: "#ADD899",
        customColor3: "#FFDE95",
        customColor4: "#F5F5DC",
        aqua: "#222",
      }
    },
  },
  plugins: [],
}