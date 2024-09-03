import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7065F0",
          98: "#F7F7FD",
          96: "#F0EFFB",
          94: "#E8E6F9",
          92: "#E0DEF7",
          90: "#D8D6F5",
        },
        secondary: "#100A55",

        grey: {
          50: " #F9FAFB",
          100: "#F4F4F6",
          200: "#E5E6EB",
          300: "#D3D5DA",
          400: "#9EA3AE",
          500: "#6C727F",
          600: "#4D5461",
          700: "#394150",
          800: "#212936",
          900: "#0B0A0F",
        },
        black: "#000929",
      },
    },
  },
  plugins: [],
};
export default config;
