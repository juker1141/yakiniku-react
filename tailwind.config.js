/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C81414",
        secondary: "#38210a",
        third: "#faf0e6",

        "ry-blue": "#3b4042",
        "ry-orange": "#ff9c24",
        "ry-yellow": "#fdd23e",
        "ry-black": "#3e3a39",
      },
      backgroundImage: {
        banner: "url('/public/banner/banner.jpg')",
        rope: "url('/public/section3-rope.webp')",
        eventBanner: "url('/public/events/event-banner.webp')",
        aboutService: "url('/public/about/service.jpg')",
        aboutSauce: "url('/public/about/sauce.jpg')",
        aboutSkill: "url('/public/about/skill.jpg')",
        aboutQuality: "url('/public/about/quality.jpg')",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "slide-right": "slide-right 15s linear infinite",
      },
      keyframes: {
        "slide-right": {
          "0%": { transform: "translateX(1000px)" },
          "100%": { transform: "translateX(-1300px)" },
        },
      },
    },
  },
  plugins: [],
};
