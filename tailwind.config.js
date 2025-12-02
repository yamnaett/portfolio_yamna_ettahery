/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Féminine Professionnelle et Claire
        'primary': '#D9468F', // Rose moderne professionnel
        'primary-light': '#F0A3C2',
        'primary-dark': '#B91C73',
        'secondary': '#A855F7', // Violet doux élégant
        'secondary-light': '#C4B5FD',
        'secondary-dark': '#7C3AED',
        'accent': '#EC4899', // Rose vif pour accents
        'accent-light': '#F9A8D4',
        'neutral': '#FDF2F8', // Rose très clair (fond principal)
        'neutral-light': '#FFFFFF',
        'neutral-dark': '#831843',
        'text-primary': '#1F2937', // Gris foncé pour texte
        'text-secondary': '#4B5563', // Gris moyen
        'text-light': '#9CA3AF', // Gris clair
        'border': '#FCE7F3', // Bordure rose très clair
        'success': '#10B981',
        'info': '#3B82F6',
        // Couleurs supplémentaires pour animations
        'pink-soft': '#FCE7F3',
        'pink-medium': '#F9A8D4',
        'lavender': '#E9D5FF',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(217, 70, 143, 0.3)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 30px rgba(217, 70, 143, 0.5)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: 1, transform: 'scale(1.2) rotate(180deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

