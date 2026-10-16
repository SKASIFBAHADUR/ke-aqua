import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "!./public/**/*",
    "!./public/videos/*.MP4"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
