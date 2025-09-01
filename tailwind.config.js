// tailwind.config.js
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"], // for editor
        sans: ["Source Sans Pro", "sans-serif"], // for preview
      },
    },
  },
  plugins: [typography()],
};
