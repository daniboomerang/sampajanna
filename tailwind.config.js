const darkThemeColors = {
  // Purple
  purple: 'hsla(268, 31%, 12%, 1)',
  darkpurple: 'hsla(270, 50%, 6%, 1)',
  'darkpurple-trns': 'hsla(270, 50%, 6%, 0.8)',
  'lightpurple-trns': 'hsla(267, 6%, 61%, 0.2)',

  // Blue
  turquoise: 'hsla(197, 81%, 66%, 1)',
  'turquoise-trns': 'hsla(197, 81%, 66%, 0.75)',

  // White
  white: 'hsla(0, 100%, 100%, 1)',
};

const lightThemeColors = {
  // Bianca
  bianca: 'hsla(33, 60%, 97%, 1)',
  darkbianca: 'hsla(33, 45%, 86%, 1)',
  'darkbianca-trns': 'hsla(33, 45%, 86%, 0.8)',

  // Cerise
  cerisered: 'hsla(349, 69%, 53%, 1)',
  'cerisered-trns': 'hsla(349, 69%, 53%, 0.75)',

  // Black
  black: 'hsla(0, 0%, 0%, 1)',
};

module.exports = {
  theme: {
    colors: {
      'white-trns': 'hsla(0, 100%, 100%, 0.8)',
      'black-trns': 'hsla(0, 0%, 0%, 0.3)',
      'codgrey-trns': 'hsla(0, 0%, 11%, 0.85)',
      trns: 'hsla(0, 0%, 0%, 0.0)',
      ...darkThemeColors,
      ...lightThemeColors,
    },
    backgroundColor: {
      primary: 'var(--color-bg-primary)',
      'almost-primary': 'var(--color-bg-almost-primary)',
      secondary: 'var(--color-bg-secondary)',
      accent: 'var(--color-bg-accent)',
      'accent-soft': 'var(--color-bg-accent-soft)',
      'accent-light': 'var(--color-bg-accent-light)',
      'accent-dark': 'var(--color-bg-accent-dark)',
    },
    textColor: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      accent: 'var(--color-text-accent)',
      'accent-soft': 'var(--color-text-accent-soft)',
    },
    fontFamily: {
      display: 'var(--font-display)',
      body: 'var(--font-body)',
    },
    borderColor: {
      soft: 'var(--color-border-soft)',
      light: 'var(--color-border-light)',
      accent: 'var(--color-border-accent)',
      black: 'var(--color-border-black)',
    },
    extend: {
      fontSize: {
        '0px': '0px',
      },
      gap: {
        '200px': '200px',
      },
      inset: {
        0: 0,
        '20px': '20px',
        '-12': '-3rem',
        12: '3rem',
        '-16': '-4rem',
        20: '5rem',
      },
      boxShadow: {
        md: 'var(--shadow-md)',
        xl: 'var(--shadow-xl)',
      },
      scale: {
        101: '1.01',
        102: '1.02',
      },
      height: {
        128: '32rem',
      },
      width: {
        '11.6/12': '96.6%',
      },
    },
  },
  variants: {},
  plugins: [],
};
