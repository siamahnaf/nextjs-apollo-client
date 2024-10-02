/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "0px",
        xs: "360px",
        sm: "480px",
        msm: "540px",
        lsm: "640px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
      boxShadow: {
        "3xl": "3px 0px 15px rgba(235, 249, 243, 0.8)"
      },
      colors: {
        main: "#FF9500",
        text: "#322F2F",
        greyed: "#E8E7E7"
      }
    },
  },
  plugins: [],
}

