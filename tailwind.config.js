/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      color: {
        primary: '#3490dc',   
        secondary: '#ffed4a',
        terciary: '#FFFFFF' ,
      },
      screens: {
        'xl': '1280px', 
         'xn': '700',
      },
      fontSize: {
        '3xl': '1.875rem', 
      },
    },
  },
    };
  
