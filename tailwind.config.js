/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        deepBlue:"linear-gradient(90deg, #161B23 0%, #1C212A 25%, #1C212A 50%, #1C212A 75%, #1C212A 100%)",
        fontBlue:"linear-gradient(50deg, #B597F6 0%, #96C6EA 100%)",
      },
      fontFamily:{
        sora:["Sora","sans"]
      }
    },
  },
  plugins: [],
}