/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#f16e53',    /* Coral/Orange */
        'brand-blue': '#6a89b6',       /* Button Blue */
        'brand-blueHover': '#5a78a3',  /* Darker Blue */
        'brand-dark': '#2d343e',       /* Nav Text */
        'bg-topbar': '#f8fafd',        /* Top Bar Gray/Blue */
        'dark': '#2d343e',             /* Dark text color */
        'gray-600': '#6b7280',
      },
      boxShadow: {
        'brand-btn': '0 4px 15px rgba(106, 137, 182, 0.3)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}