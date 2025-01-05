/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#ED5652",
        "primary-tint": "#ED6D75",
        secondary: "#171A28",
        "secondary-tint": "#1D2335",
        "light-gray": "#F8F9FF",
      },
      backgroundImage: {
        // "hero-gradient":
        //   "radial-gradient(circle, rgba(50,136, 216,1) 55%, rgba(174,69,74,0.4) 78%, rgba(23,26,40,0.3) 100%)",
        "hero-gradient":
          "linear-gradient(40deg, rgba(23,26,40,0.3) 45%, rgba(174,69,74,0.4) 85%, rgba(50,136, 216,0.5) 100%)",
        "why-choose-us-gradient":
          "linear-gradient(180deg, rgba(46,45,65,1) 0%, rgba(27,29,43,1) 63%, rgba(23,26,40,1) 100%);",
        "scan-qr-gradient":
          "linear-gradient(240deg, rgba(23,26,40,0.3) 45%, rgba(174,69,74,0.4) 85%, rgba(50,136, 216,0.5) 100%)",
        "faq-gradient":
          "linear-gradient(90deg, rgba(35,38,54,1) 0%, rgba(99,55,70,1) 100%)",
        "faq-section-gradient":
          "linear-gradient(100deg, rgba(23,26,40,0.3) 65%, rgba(174,69,74,0.3) 85%, rgba(50,136, 216,0.6) 100%)",
        "contact-gradient":
          "linear-gradient(180deg, rgba(29,35,53,0.5) 70%, rgba(85,102,155,0.2) 100%)",
        "contact-information-gradient":
          "linear-gradient(200deg, rgba(23,26,40,0.3) 45%, rgba(174,69,74,0.4) 85%, rgba(50,136, 216,0.5) 100%)",
        "contact-section-gradient":
          "linear-gradient(25deg, rgba(23,26,40,0.3) 45%, rgba(174,69,74,0.4) 85%, rgba(50,136, 216,0.5) 100%)",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 50s linear infinite",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        helvetica: "helvetica",
        "helvetica-caps": "helvetica-caps",
      },
    },
    screens: {
      "big-screen": { min: "2400px" },
      "3xl": { max: "1700px" },
      "2xl": { max: "1536px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "800px" },
      sm: { max: "639px" },
      xs: { max: "375px" },
    },
  },
  plugins: [],
};
