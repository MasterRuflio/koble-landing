const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',  // If using `src` directory
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'), // Directly require the plugin here
    plugin(function({ addUtilities, addComponents, e, prefix, config }){
      // Your custom plugins can still go here
    })
  ],
};
