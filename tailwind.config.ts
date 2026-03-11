import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.35s ease-out forwards",
        "slide-up-delay-1": "slide-up 0.35s ease-out 0.35s forwards",
        "slide-up-delay-2": "slide-up 0.35s ease-out 0.7s forwards",
        "slide-in-left": "slide-in-left 0.45s ease-out forwards",
        "slide-in-right": "slide-in-right 0.45s ease-out forwards",
      },
      fontSize: {
        "section-title": "64px",
        "section-info": "32px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
      },
      fontWeight: {
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
      },
      colors: {
        paper: "#fff9e4",
        paperDark: "#ebe4d9",
        brown: "#3d2c29",
        darkBrown: "var(--color-dark-brown)",
        darkerBrown: "#2d211f",
        olive: "#6b7c4a",
        sage: "#9caa7e",
        cream: "#fff9e4",
        accent: "#8b9d6b",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        ibarra: ["var(--font-ibarra)", "Georgia", "serif"],
        // sans по умолчанию, если нужен один из них
        sans: ["var(--font-rubik)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "torn-top":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40' preserveAspectRatio='none'%3E%3Cpath d='M0 40V0c50 20 100 20 150 0s100 20 150 0 100 20 150 0 100 20 150 0 100 20 150 0 100 20 150 0 100 20 150 0 100 20 150 0v40H0z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
        "torn-bottom":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40' preserveAspectRatio='none'%3E%3Cpath d='M0 0v40c50-20 100-20 150 0s100-20 150 0 100-20 150 0 100-20 150 0 100-20 150 0 100-20 150 0 100-20 150 0 100-20 150 0V0H0z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
