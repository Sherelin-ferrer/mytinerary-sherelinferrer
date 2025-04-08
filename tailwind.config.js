/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        animation: {
          zoomDown: 'zoomDown 20s ease-in-out infinite',
        },
        keyframes: {
          zoomDown: {
            '0%, 100%': {
              transform: 'scale(1) translateY(0)'
            },
            '50%': {
              transform: 'scale(1.1) translateY(5%)'
            },
          },
        },
      },
    },
    plugins: [],
  }
  