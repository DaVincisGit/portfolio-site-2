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
        jiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(8deg)' },
          '45%': { transform: 'rotate(-6deg)' },
          '60%': { transform: 'rotate(4deg)' },
          '75%': { transform: 'rotate(-2deg)' },
          '90%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        customwiggle: 'customwiggle 1.5s ease-in-out infinite',
        jiggle: 'jiggle 0.6s ease-in-out',
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
