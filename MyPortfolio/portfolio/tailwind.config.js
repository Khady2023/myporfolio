/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020f24",
        offwhite: "#aaa6c3"
      },
      screens: {
        sm: "500px",
        md: "800px",
        lg: "1024px",
        xl: "1280px",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage: {
        "hero": "url('/photos/bluewall.jpg')",
      }
    },
  },
  plugins: [],
}

