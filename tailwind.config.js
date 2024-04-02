/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'poster-blue': '#14137B',
        'alice-blue': '#F0F5FD',
        'alice-blue-50': '#FAFDFF',
        'pacific-blue': '#009DCC',
        'hawkes-blue': '#D8E2F2',
        'pale-cornflower-blue': '#A5C9FF',
        'raven': '#6C757D',
        'gainsboro': '#DFDFDF',
        'whisper': '#E4E4E4',
      }
    },
  },
  plugins: [],
};
