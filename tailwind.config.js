/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#5C00F1",
        headingColor: "#081e21",
        smallTextColor: "#193256",
        textDark: "#fff",
        darkMode: "#0f172a",
      },
    },
  },
};
