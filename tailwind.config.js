module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 40s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-2700px)" },
        },
      },
    },
    screens: {
      'ssm': "375px",

      'msm': "425px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
  darkMode: "class",
};
