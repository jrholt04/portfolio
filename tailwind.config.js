/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        navy: {
          900: '#0a0f1e',
          800: '#0d1530',
          700: '#112045',
        },
        accent: '#4f8ef7',
      },
    },
  },
  plugins: [],
}
