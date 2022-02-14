module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': '1024px', // Laptop
      'xl': '1280px', // Desktop
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'lorange': '#f6d3ac',
      'salmon': '#fd766b',
      'torange': '#fd4e4d',
      'amaranth': '#e5234b',
      'ampurp': '#a92d56',
      'highlight': '#32c3a6',
      'white': '#ffffff',
      'black': '#000000',
      'shade': '#d6d4ce',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '64px',
      '8': '124px',
      '9': '248px',
      '10': '496px'
    },
    fontFamily: {
      primary: ['Signika', 'sans-serif'],
      secondary: ['"Signika Negative"', 'sans-serif'],
      special: ['"Nanum Pen Script"', 'serif']
    },
    extend: {},
  },
  plugins: [],
};
