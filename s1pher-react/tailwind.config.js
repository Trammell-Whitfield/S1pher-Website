/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#00E5C8',
          dim: '#00b8a0',
        },
        orange: {
          DEFAULT: '#FF8C42',
          bright: '#FFA559',
          dim: '#FF6B35',
        },
        bg: {
          DEFAULT: '#000000',
          2: '#0A0A0A',
          3: '#141414',
        },
        card: '#0F0F0F',
        border: 'rgba(255,255,255,0.1)',
        // Enhanced grayscale for primary design
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'grid-pulse': 'gridPulse 8s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-up': 'slideInUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': {
            textShadow: '0 0 28px rgba(255,140,66,0.2), 0 0 56px rgba(255,140,66,0.1)'
          },
          '50%': {
            textShadow: '0 0 38px rgba(255,140,66,0.3), 0 0 76px rgba(255,140,66,0.15)'
          },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
