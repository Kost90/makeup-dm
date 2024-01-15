import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width:{
        photo:'350px',
        text:'500px',
      },
      zIndex:{
        "-1":"-1",
      },
      height:{
        height:'420px',
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontSize: {
      Heding1: "60px",
      Heading2: "48px",
      Heading3: "36px",
      Xlarge: "20px",
      Large: "18px",
      Medium: "16px",
      Small: "14px",
      xs:"12px",
    },
    colors: {
      pink: "#FFD4D0",
      red: "#FC3314",
      dark: "#1F1F1F",
      "dark-gray": "#8D8D8D",
      "medium-gray": "#D7D7D7",
      gray: "#F7F7F7",
      white:'#FFFFFF',
    },
  },
  plugins: [],
};
export default config;
