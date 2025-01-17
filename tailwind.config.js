/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        headerContainer: "1320px",
      },
      fontFamily:{
        dm: "DM Sans"
      },
      colors:{
        menuText:"#767676",
        menuTextH:"#262626",
        catagoryBg:"#979797",
      },
      width:{
        logoW:"40%",
        menuW:"60%"
      },
      backgroundImage:{
        bannerImg:"url('./src/assets/Intro.png')",
      }

    },
  },
  plugins: [],
}

