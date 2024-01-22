/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      colors: {
        primary: '#1677FF',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
