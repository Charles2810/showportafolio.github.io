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
        primary: '#6366f1',
        secondary: '#8b5cf6',
        dark: '#0f172a',
        light: '#f1f5f9',
      },
    },
  },
  plugins: [],
}
