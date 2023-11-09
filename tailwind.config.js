const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",],
  
  theme: {
    extend: {
      colors: {
        white: '#ffffff', // Defina a cor branca com o código da cor desejado
      },
      backgroundImage:{
        'checked': "url('/icons/check.svg)"
      }
    },
    fontFamily: {
      nonito: ['Fjalla One'],
      inter: ['Inter'],
      roboto: ['Roboto']
    }
  },
  plugins: [],
});
