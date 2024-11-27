module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant files
    "./public/index.html",        // Include public HTML if necessary
  ],
  theme: {
    extend: {
      colors: {
        // Existing colors
        darkHeaderFooter: "#0B1222", // Dark header & footer
        darkMainBg: "rgb(15 23 42 / var(--tw-bg-opacity))", // Dark main background
        lightHeaderFooter: "rgba(248, 250, 252, 0.6)", // Light header & footer
        lightMainBg: "#f8fafc", // Light main background (based on the image pattern)

        // Hero Section Colors
        cardDark: "#1e293b", // Dark card background
        cardLight: "#ffffff", // Light card background
        textDark: "#e2e8f0", // Text color for dark mode
        textLight: "#1e293b", // Text color for light mode
        primary: "#4caf50", // Accent color (buttons and highlights)
        secondary: "#ff5722", // Secondary accent
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for cards
      },
    },
  },
  plugins: [],
};



