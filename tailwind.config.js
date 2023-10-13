/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      colors: {
        "mud": "#604800",
        "light-grey": "#e0e0e0",
        "medium-light-grey": "#b7b7b7",
        "medium-grey": "#919191",
        "dark-grey": "#404040",
        "primary-orange": "#ed7801",
        "secondary-orange": "#faaf18",
      },
      backgroundColor: {
        "mud": "#604800",
        "light-grey": "#e0e0e0",
        "medium-light-grey": "#b7b7b7",
        "medium-grey": "#919191",
        "dark-grey": "#404040",
        "primary-orange": "#ed7801",
        "secondary-orange": "#faaf18",
      }
    },
  },
  plugins: [],
}
