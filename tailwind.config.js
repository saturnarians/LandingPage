/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],

  theme: { 
    extend: {

      keyframes: {
        'fade-in-out': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in-out': 'fade-in-out 5s infinite',
      },
      
      screens: {
        'sm': '320px',
        // => @media (min-width: 320px) { ... }
  
        'md': '375px',
        // => @media (min-width: 375px) { ... }
  
        'lg': '425px',
        // => @media (min-width: 425px) { ... }
  
        'xl': '768px',
        // => @media (min-width: 768px) { ... }
  
        '2xl': '1024px',
        // => @media (min-width: 1024px) { ... }

        '3xl': '1440px',
        // => @media (min-width: 1440px) { ... }
        
        '4xl': '2560px',
        // => @media (min-width: 2560px) { ... }
      },

    colors: {
      customBlack: '#0d0d0d',
      customOrangeRed: 'rgb(255 83 0)',
      customPurple: 'rgb(212, 160, 255)',
      customGrey: 'rgb(64 64 64)',
      customLightGrey:'rgb(229 229 229) ',
      veryLightGrey:'rgb(250 250 250)',
      customWhiteGrey:'rgb(245 245 245)',
      Headercolor:'rgb(76, 59, 91)',
      Headercolor2:'#DDB3FF',
    },

    backgroundImage: theme => ({
      'gradient-to-left-top': 'linear-gradient(to left top, #d4d4d4, #f5f5f5, #d4d4d4, #f5f5f5, #d4d4d4)',
    }),
  },

  fontSize: {
    xs: '0.5rem',
    sm: '0.8rem',
    base: '1rem',
    xl: '1.25rem',
    '2xl': '1.563rem',
    '3xl': '1.953rem',
    '4xl': '2.3rem',
    '5xl': '2.9rem',
    '6xl': '3.815rem',
    '7xl': '4.705rem',
    '8xl': '5.625rem',
    clamp: "clamp(1rem, 5vw, 3rem)", //This example sets the font size to linearly scale between 1rem and 3rem based on the viewport width (vw)
  },
},

    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', "Inter"],
        serif: ['ui-serif', 'Georgia',"Inter"],
        inter: ["Inter_Fallback"],
        mono: ['ui-monospace', 'SFMono-Regular'],
        body: ["sans-serif"],
      },
  
      fontWeight: {
        light: '300',
        semibold: '600',
        extrabold: '800',
      },
    },

    plugins: [],

  }

