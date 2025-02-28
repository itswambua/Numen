// tailwind.config.mjs
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // Primary colors from the book cover
        'sky': '#6B99C0',
        'sky-light': '#98B7D3',
        'sky-dark': '#4C7699',
        
        'mountain': '#5D6D7E',
        'mountain-light': '#85919E',
        'mountain-dark': '#45515E',
        
        'forest': '#2C5F2D',
        'forest-light': '#428543',
        'forest-dark': '#1F4320',
        
        'deep-brown': '#2E2A1B',
        'deep-brown-light': '#4A432B',
        'deep-brown-dark': '#1D1A13',
        
        'rooster': '#C41E3A',
        'rooster-light': '#DB465E',
        'rooster-dark': '#A3172F',
      },
    },
  },
  plugins: [require("daisyui")],
};