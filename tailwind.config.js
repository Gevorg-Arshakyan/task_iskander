/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        'primary-blue': '#2D82BE',
        'light-blue': '#5EAAD8',
        'product-blue': '#7EC4E8',
        'header-blue': '#4A8FB9',
        'footer-blue': '#4A8FB9',
      },
    },
  },
  plugins: [],
  important: true, // This ensures Tailwind utilities have higher specificity
}
