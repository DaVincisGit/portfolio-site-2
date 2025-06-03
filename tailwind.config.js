module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
    customwiggle: {
      '0%, 100%': { transform: 'translateX(0)' },
      '20%': { transform: 'translateX(-6px)' },
      '40%': { transform: 'translateX(6px)' },
      '60%': { transform: 'translateX(-3px)' },
      '80%': { transform: 'translateX(3px)' },
    },
  },
  animation: {
    customwiggle: 'customwiggle 1.5s ease-in-out infinite',
  },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'mono': ['Fira Mono', 'monospace'],
      },
      colors: {
        neonblue: "#1ecbf6",
        darkbg: "#131642"
      }
    },
  },
  plugins: [],
}
