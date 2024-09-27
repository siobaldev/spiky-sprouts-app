/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        noise: 'url(/assets/NoiceTexture.png)'
      },
      fontFamily: {
        sans: ['var(--font-geist)'],
        moranga: ['var(--font-moranga-regular)', 'var(--font-moranga-black)']
      },
      colors: {
        primary: 'hsl(80, 40%, 6%)', // Background color
        accent: 'hsl(93, 54%, 54%)', // Accent color
        button: 'hsl(25, 98%, 32%)', // Button color
        hover: 'hsl(29, 84%, 17%)' // Hover color for buttons
      },
      opacity: {}
    }
  },
  plugins: []
}
