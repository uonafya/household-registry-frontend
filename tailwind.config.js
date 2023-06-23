/** @type {import('tailwindcss').Config} */
module.exports = {
  // compile css on the file to make build times faster
  mode: 'jit',
  // Remove unused styles, enable shipping smaller file to production
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

