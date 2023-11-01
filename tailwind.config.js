const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
