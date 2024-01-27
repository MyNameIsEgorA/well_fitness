import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{tsx, ts}",
    "./src/pages/*.{tsx, ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        heroBackgroundColor: '#E9EAEF',
        mainTextColor: '#1A1A25',
        softRed: '#F53B49',
        darkPurple: "#1A1A25",
        softGrey: "#858FA4"
      },
      screens: {
        '1810px': '1810px',
        '1410px': '1410px',
        '960px': '960px',
        '750px': '750px',
      }
    },
  },
  plugins: [],
};

export default config;
