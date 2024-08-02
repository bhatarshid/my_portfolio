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
        'customPurple': '#7843E9'
      },
      padding: {
        '100': '29rem'
      },
      margin: {
        '100': '35rem'
      }
    },
  },
  plugins: [],
};
export default config;
