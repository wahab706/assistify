/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  darkMode: true,
  theme: {
    extend: {
      screens: {},
      colors: {
        secondary: "#FBC75E",
        "gray-light": "#AAAAAA",
        "gray-medium": "#ADADAD",
      },
      backgroundImage: {
        primary: "linear-gradient(100.07deg, #70A22C 18.13%, #47B995 107.16%)",
        "primary-hover":
          "linear-gradient(100.07deg, #5A9D2C 18.13%, #38A078 107.16%)",
      },
      spacing: {
        4.5: "18px",
        6.5: "26px",
        7.5: "30px",
        8.5: "34px",
        9.5: "38px",
        10.5: "42px",
      },
      fontSize: {
        10: "10px",
        13: "13px",
        15: "15px",
        "7.5xl": "64px",
      },
      fontFamily: {
        Cairo: "Cairo",
      },
      borderRadius: {
        14: "14px",
      },
    },
  },
};
