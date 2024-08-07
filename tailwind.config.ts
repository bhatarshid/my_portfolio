import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/background_image.jpg')"
      },
      colors: {
        'lightGray': '#DCDCDE',
        'customPurple': '#7843E9',
        "color-1": "#b7bab2"
      },
      padding: {
        '100': '29rem'
      },
      margin: {
        '100': '35rem'
      },
      fontFamily: {
        'montserrat': ["montserrat", "sans-serif"],
        'ubuntu': ["Ubuntu", "sans-serif"],
        'calli': ["Calligraffitti", "cursive"]
      }
    },
  },
  plugins: [],
};
export default config;
