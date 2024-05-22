/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--background-base)",
        highlight: "var(--background-highlight)",
        elevatedHighlight: "var(--background-elevated-highlight)",
        textSubdued: "var(--text-subdued)",
      },
    },
  },
  plugins: [],
};
