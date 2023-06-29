/** @type {import('tailwindcss').Config} */
// module.exports = {
//   // compile css on the file to make build times faster
//   mode: 'jit',
//   // Remove unused styles, enable shipping smaller file to production
//   purge: ['./src/**/*.{js,jsx}', './public/index.html'],
//   content: ['./src/**/*.{js,jsx}', './public/index.html'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const plugin = require('tailwindcss/plugin')
module.exports = {
    mode: 'aot',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'serif': ['serif'],
            'display': ['Karla', 'sans-serif'],
            'sans': ['Karla', 'sans-serif'],
            'mono': ['monospace']
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        
    ],
}
