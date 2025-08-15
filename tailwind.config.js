module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        animation:
        {
          'spin-slow': 'spin 8s linear infinite',
        }
      },
    },
  },
  plugins: [],
}
