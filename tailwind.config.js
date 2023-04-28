/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slider: {
          from: {
            transform: "translateX(-100vw)",
            opacity: 0,
          },
          to: { transform: "translateX(0px)", opacity: 1 },
        },
      },
      animation: {
        slider: "slider .8s",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playFair: ["Playfair Display", "serif"],
        radley: ["Radley", "serif"],
        roboto: ["Roboto Serif", "serif"],
      },
      colors: {
        gold: "#FFD700",
        aquaCard: "rgba(48, 119, 171, 0.9)",
        aquaButton: "rgba(48, 119, 171, 0.79)",
        lightAquaCard: "rgba(48, 119, 171, 0.16)",
        lightRed: "rgba(171, 48, 85, 0.79)",
        grey: "#525250",
        schemaBackgound: "rgba(255, 255, 255, 0.72)",
      },
      backgroundColor: {
        imageOpacity: "rgba(0, 0, 0, 0.19)",
      },
      backgroundImage: {
        "hero-main": "url('/assets/elba-gd3fdbbea6_1920.jpg')",
        "hero-cuisine": "url('/assets/happy-birthday-g095e1e6fa_1920.jpg')",
        "hero-rooms": "url('/assets/to-travel-g04925ceb0_1920.jpg')",
        "hero-beach": "url('/assets/seashore-gcfe15f0fd_1920.jpg')",
        "hero-rooms": "url('/assets/bedroom-g12e25ce3a_1920.jpg')",
        "hero-rooms-2": "url('/assets/bed-g3bdefde0c_1920.jpg')",
        "single-room": "url('/assets/bedroom-g57f6bfa9e_1920.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "10vh": "10vh",
        "90vh": "90vh",
        "510px": "510px",
        "2vw": "2vw",
        "4vw": "4vw",
        "6vw": "6vw",
        "12vw": "12vw",
      },
      margin: {
        "10vh": "10vh",
        "20vh": "20vh",
      },
      padding: {
        "10vh": "10vh",
      },
      width: {
        "100vw": "100vw",
        "97vw": "97vw",
        "680px": "680px",
        "818px": "818px",
        "2vw": "2vw",
        "4vw": "4vw",
        "6vw": "6vw",
        "8vw": "8vw",
        "12vw": "12vw",
        "24vw": "24vw",
      },
      screens: {
        desktop: "1720px",
      },
    },
  },
  plugins: [],
};
