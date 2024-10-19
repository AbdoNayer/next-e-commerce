import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
export default config;
