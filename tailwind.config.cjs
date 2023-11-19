/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        barlowCondensed: ["Barlow Condensed","sans-serif"],
        belle: ["Bellefair", "serif"]
      }
    },
  },
  plugins: [],
}
