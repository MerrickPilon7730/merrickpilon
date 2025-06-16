
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
    ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
};
