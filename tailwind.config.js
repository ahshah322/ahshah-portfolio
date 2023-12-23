/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '5px',
          xs: '15px',
          sm: '25px',
          sml: '30px',
          md: '50px',
          mdl: '60px',
          lg: '80px',
        },
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      // colors: {
      //   'bodyColor-light': "#212428",
      //   'textColor-light textColor-dark-light': "#c4cfde",
      //   '-light-light': "linear-gradient(145deg, #1e2024, #23272b)",
      //   'designColor-light': "#F7F8FC",

      //   bodyColor: "#212428",
      //   textColor-light textColor-dark: "#c4cfde",
      //   boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      //   designColor: "#ff014f",
      // },
      colors: {
        'bodyColor-light': "#FEFEFE",
        'textColor-light': "#c4cfde",
        'backgroundColor-light': '#FAF7FE',
        'boxBgColor-light': "#FAF7FE",
        'designColor': "#ff014f",
        'gradientColor': 'linear-gradient(#00FFA4, #A668FF)',
        'gradientColorProjectCardOne': 'linear-gradient(145deg, #ffffff, #e5e5e5)',
        'gradientColorProjectCardTwo': 'linear-gradient(315deg, #ffffff, #e5e5e5)',

        'bodyColor-dark': "#0F172A",
        'textColor-dark': "#141618",
        'backgroundColor-dark': '#17191C',
        'boxBgColor-dark': "#0B1120",
        'designColor': "#ff014f",
      },
    boxShadow: {
      'shadowLight': "10px 10px 19px #E5E5E5, -10px -10px 19px #E5E5E5",
      'shadowDark': "10px 10px 19px #030712, -10px -10px 19px #0f172a",
      'shadowProjectCardOne': "8px 8px 25px #c6c6c6, -8px -8px 25px #ffffff",
      'shadowProjectCardTwo': "-8px -8px 25px #c6c6c6, 8px 8px 25px #ffffff",

      'shadowVerticalCircleLight': "0 0 0 4px #D1D5DB",
      'shadowVerticalCircleDark': "0 0 0 4px #17191C"
    },
  },
},
  plugins: [],
};