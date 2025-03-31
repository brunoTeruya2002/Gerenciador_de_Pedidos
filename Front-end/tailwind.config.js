/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      'xxs-table':{'min':'0px','max':'510px'},
      'xs': '480px',  // Breakpoint extra pequeno
      'xs-table':'510px',
      'sm-table':'600px',
      'sm': '640px',  // Breakpoint pequeno
      'md': '768px',  // Breakpoint médio
      'md-table': '900px',
      'lg': '1024px', // Breakpoint grande
      'xl': '1440px', // Breakpoint extra grande
      '2xl': '1600px', // Breakpoint ainda maior
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}