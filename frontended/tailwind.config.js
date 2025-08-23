/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}", // very important!
//     // darkMode: 'class',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


