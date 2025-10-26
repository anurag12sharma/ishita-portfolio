/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': 'var(--primary-background)',
        'primary-foreground': 'var(--primary-foreground)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        'secondary-background': 'var(--secondary-background)',
        'secondary-foreground': 'var(--secondary-foreground)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-dark': 'var(--secondary-dark)',
        'accent-green': 'var(--accent-green)',
        'accent-greenText': 'var(--accent-green-text)',
        'accent-brown': 'var(--accent-brown)',
        'accent-yellow': 'var(--accent-yellow)',
        'accent-yellowLight': 'var(--accent-yellow-light)',
        'accent-purpleLight': 'var(--accent-purple-light)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-light': 'var(--text-light)',
        'text-white': 'var(--text-white)',
        'text-bright': 'var(--text-bright)',
        'background-card': 'var(--bg-card)',
        'background-overlay': 'var(--bg-overlay)',
        'background-accent': 'var(--bg-accent)',
        'header-background': 'var(--header-bg)',
        'footer-background': 'var(--footer-bg)',
        'chip-text': 'var(--chip-text-color)',
        'chip-border': 'var(--chip-border-color)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 30px rgba(0, 0, 0, 0.15)',
        'hover': '0 12px 24px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
