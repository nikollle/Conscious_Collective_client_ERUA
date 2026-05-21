/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bone: "#EEEEEE",
        linen: "#D7CCB8",
        chalk: "#DAD5C2",
        greige: "#C4BFAC",
        stone: "#ADA590",
        plum: "#6E4148",
        oxblood: "#271118",
      },
    },
  },
  plugins: [],
};
