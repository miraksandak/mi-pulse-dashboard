/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./templates/**/*.twig", // Symfony šablony
      "./js/**/*.{js,ts,jsx,tsx}", // Všechny React/TS komponenty
    ],
    theme: {
      extend: {
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        animation: {
          fadeInUp: 'fadeInUp 0.6s ease-out both',
        },
      },
    },
    plugins: [],
  }
  