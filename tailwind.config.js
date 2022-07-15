module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      btn: '250px',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: { max: '880px' },
      // => @media (min-width: 1024px) { ... }

      xl: '1245px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        Rubik: 'Rubik',
      },
      colors: {
        ModerateBlue: ' hsl(238, 40%, 52%)',
        SoftRed: ' hsl(358, 79%, 66%)',
        LightGrayishBlue: ' hsl(239, 57%, 85%)',
        PaleRed: 'hsl(357, 100%, 86%)',
        DarkBlue: ' hsl(212, 24%, 26%)',
        GrayishBlue: 'hsl(211, 10%, 45%)',
        LightGray: ' hsl(223, 19%, 93%)',
        VeryLightGray: 'hsl(228, 33%, 97%)',
        White: 'hsl(0, 0%, 100%)',
        Black: 'hsl(0, 0%, 0%)',
        LightNavyVliot: 'hsl(238.6,56.8%,85.5%)',
      },
      textUnderlineOffset: {
        4: '-4px',
      },
    },
  },
  plugins: [],
};
