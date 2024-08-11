/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  darkMode: true,
  theme: {
    extend: {
      screens: {
  
      },
      colors: {
        primary: "#64C6AB",
        secondary: "#FBC75E",
      },
      spacing: {
        4.5: "18px",
        6.5: "26px",
        7.5: "30px",
        8.5: "34px",
        9.5: "38px",
      },
      fontSize: {
        10: "10px",
        13: "13px",
        15: "15px",
        "7.5xl": "64px",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        14: "14px",
      },
    },
  },
};
