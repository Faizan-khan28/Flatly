/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        playfair: ["Playfair Display", "serif"],

      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.5s ease-out',
      },
      backgroundImage: {
        'hero-pattern': "url(https://img.freepik.com/premium-photo/hostel-room-with-bunk-beds-dark-green-curtains_885831-147999.jpg?ga=GA1.1.1429882413.1726407954&semt=ais_hybrid)",
        'services-hero': "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzRwqZy4GZ7sc0POxW48f0AHjvCLlJ9lGJA&s)",
      },
    },
  },
  plugins: [],
}

