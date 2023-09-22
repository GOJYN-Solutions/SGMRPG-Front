const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: '#ffffff', // Defina a cor branca com o código da cor desejado
      },
    },
    fontFamily: {
      nonito: ['Fjalla One'],
      inter: ['Inter']
    }
  },
  plugins: [],
});
