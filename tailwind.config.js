module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./Layout.jsx"  // 👈 include this manually
  ],
  theme: {
    extend: {
      colors: {
        'premium-navy': '#1a365d',
        'premium-cream': '#f8f4e9',
        'premium-gold': '#d4af37',
        'premium-teal': '#2a9d8f',
        'premium-charcoal': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
