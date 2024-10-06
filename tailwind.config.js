/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url(/assets/NoiceTexture.png)",
      },
      fontFamily: {
        sans: ["var(--font-geist)"],
        morangaRegular: "var(--font-moranga-regular)",
        morangaBlack: "var(--font-moranga-black)",
      },
      colors: {
        primary: "hsl(80, 40%, 6%)", // Background color
        accent: "hsl(93, 54%, 54%)", // Accent color
        button: "hsl(25, 98%, 32%)", // Button color
        hover: "hsl(15, 98%, 32%)", // Hover color for buttons
      },
      opacity: {
        87: "0.87",
        60: "0.60",
        38: "0.38",
      },
      dropShadow: {
        sm: "0 0 10px rgba(222, 168, 65, 0.4)",
        md: "0 0 17.5px rgba(222, 168, 65, 0.4)",
        lg: "0 0 25px rgba(222, 168, 65, 0.4)",
      },
      boxShadow: {
        itemCard: "0 0 25px rgba(0, 0, 0, 0.25)",
        headerBottom: "0px 0px 10px 10px rgb(17, 21, 9)",
        navShadow: "20px 0px 30px -15px hsl(80, 40%, 6%)",
      },
    },
  },
  plugins: [],
};
