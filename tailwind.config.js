/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        'special-width': '0 42.5px 125px 42.5px',
      },
      borderColor: {
        'special-color': 'transparent transparent rgb(255, 255, 255) transparent',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '0 16px 10px -17px rgba(255, 255, 255, 0.5)',
        'negativeShadow': '-1px -1px 10px -2px rgba(255, 255, 255, 0.5)'
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards, slideIn 0.5s ease-in forwards, showShadow 2s ease-in-out forwards, logoFadeInOut 2s ease-in-out forwards",
        borderFadeInHeight: "borderFadeInHeight 2s ease-in forwards",
        borderFadeInWidth: "borderFadeInWidth 2s ease-in forwards",
        showShadow: "showShadow delay-2000 1s ease-in-out forwards",
        logoFadeInOut: "logoFadeInOut 2s ease-in-out forwards",
        showTextDelay: "showTextDelay 3s ease-in forwards",
        burgerLinesMoveIn: "collapseBurger 2s ease-in forwards"
      },
      variants: {
        fadeIn: ["motion-safe"],
        slideIn: ["motion-safe"],
        burgerLinesMoveIn: ["motion-safe"]
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          from: { transform: "translateX(-10%)" },
          to: { transform: "translateX(0)" },
        },
        borderFadeInWidth: {
          "0%": { opacity: 0, width: 0, height: '2px' },
          "100%": { opacity: 1, width: '100%', height: '2px' },
        },
        borderFadeInHeight: {
          "0%": { opacity: 0, height: 0, width: '2px' },
          "100%": { opacity: 1, height: '100%', width: '2px' },
        },
        showShadow: {
          "0%": { boxShadow: 'none' },
          "50%": { boxShadow: '10px 10px 48px 22px rgba(247,242,247,1)' },
          "100%": { boxShadow: '10px 10px 27px -11px rgba(247,242,247,1)' },
        },
        logoFadeInOut: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 }, 
        },
        showTextDelay: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      borderWidth: {
        default: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
    }, // Closing bracket for extend property moved here
  },
  plugins: [],
};
