/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        baloo: '"Baloo Bhai 2", sans-serif',
        titan: '"Titan One", sans-serif',
      },
      colors: {
        body: "#fdf4f5",
        primary: "#4299E1",
        secondary: "#FF6347",
        secondaryH: "#FF5865",
        third: "#BC94C8",
      },
    },
  },
  plugins: [],
}
