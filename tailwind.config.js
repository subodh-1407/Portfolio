// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgb(125 211 252 / 10%), transparent 50%), linear-gradient(141.27deg, transparent 50%, rgb(21 34 56 / 90%))',
      },
    },
  },
  plugins: [],
};
