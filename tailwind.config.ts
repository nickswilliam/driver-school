import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('https://res.cloudinary.com/dymyb2f2i/image/upload/v1706071857/driving-school/fbjo0ir9bwh4xebkk7ch.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
