/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Ajoutez d'autres chemins si besoin
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
