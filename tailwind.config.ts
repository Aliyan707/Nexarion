import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#030712',
          secondary: '#050816',
          tertiary: '#0F172A',
        },
        brand: {
          950: '#0F172A',
          800: '#1E3A8A',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
          300: '#93C5FD',
        },
        surface: {
          DEFAULT: 'rgba(255,255,255,0.04)',
          hover: 'rgba(255,255,255,0.07)',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(37,99,235,0.3), rgba(3,7,18,0))',
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(96,165,250,0.05) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(59,130,246,0.3)',
        'glow-md': '0 0 40px rgba(59,130,246,0.4)',
        'glow-lg': '0 0 80px rgba(59,130,246,0.5)',
        'glow-xl': '0 0 120px rgba(37,99,235,0.6)',
        'glass': '0 8px 32px rgba(0,0,0,0.37)',
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'slide-up': 'slide-up 0.6s ease forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
