import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './app/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
    './pages/**/*.{vue,ts,js}',
    './server/**/*.{ts,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
})
