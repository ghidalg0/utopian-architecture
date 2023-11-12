/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        utopian: "url('/banner.png')",
        bubbles: "url('/bubbles.png')",
        "rocks-1": "url('/landscape/rocks-1.png')",
      },
    },
  },
  plugins: [],
};
