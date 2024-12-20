/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        'custom': '1200px', // Dodaj svoju vrijednost
      },
      scale: {
        80: '.8',  // 80% skale
        85: '.85', // 85% skale
      },
    },
  },
  plugins: [],
};
