/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      ds: "848px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1383px" /* Max width of databoxes layout */,
    },
    borderRadius: {
      "s-nudge": "var(--corner-radius-s-nudge)",
      m: "var(--corner-radius-m)",
      "m-nudge": "var(--corner-radius-m-nudge)",
      xl: "var(--corner-radius-xl)",
      full: "50%",
    },

    colors: {
      primary: {
        DEFAULT: "var(--text-primary-color)",
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
      secondary: {
        100: "var(--color-secondary-100)",
        200: "var(--color-secondary-200)",
        300: "var(--color-secondary-300)",
        400: "var(--color-secondary-400)",
        500: "var(--color-secondary-500)",
        600: "var(--color-secondary-600)",
        700: "var(--color-secondary-700)",
        800: "var(--color-secondary-800)",
        900: "var(--color-secondary-900)",
      },
      success: {
        100: "var(--color-success-100)",
        200: "var(--color-success-200)",
        300: "var(--color-success-300)",
        400: "var(--color-success-400)",
        500: "var(--color-success-500)",
        600: "var(--color-success-600)",
        700: "var(--color-success-700)",
      },
      warning: {
        100: "var(--color-warning-100)",
        200: "var(--color-warning-200)",
        300: "var(--color-warning-300)",
        400: "var(--color-warning-400)",
        500: "var(--color-warning-500)",
        600: "var(--color-warning-600)",
        700: "var(--color-warning-700)",
      },
      error: {
        100: "var(--color-error-100)",
        200: "var(--color-error-200)",
        300: "var(--color-error-300)",
        400: "var(--color-error-400)",
        500: "var(--color-error-500)",
        600: "var(--color-error-600)",
      },
      neutral: {
        white: "var(--color-neutral-white)",
        black: "var(--color-neutral-black)",
      },
      transparent: "transparent",
      focus: {
        base: "var(--color-focus-base)",
      },
      "text-primary": "var(--text-primary)",
    },
    extend: {
      screens: {
        print: { raw: "print" },
      },
      animation: {
        "fade-in": "fadeIn 2s",
        "scale-x-in": "scaleXIn 0.5s",
        "scale-x-out": "scaleXOut 0.5s",
        "slide-up": "slideUp 0.5s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleXIn: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        scaleXOut: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      zIndex: {
        100: "100",
        200: "200",
      },
    },
  },
  plugins: [],
};