/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        dark: '#000000',
        light: '#ffffff',
        gray: {
          850: '#1a1a1a',
        }
      },
    },
  },
  plugins: [],
}
