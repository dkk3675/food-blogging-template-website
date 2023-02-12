/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto','sans-serif'],
      },
      screens: {
        'md': {'min': '329px', 'max': '767px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        'lm': {'min': '768px', 'max': '959px'},
        'lg': {'min': '960px', 'max': '1100px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        // 'xl': {'min': '951px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        // '2xl': {'min': '1025px', 'max': '1280px'},
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
