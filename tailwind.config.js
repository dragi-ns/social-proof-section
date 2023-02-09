/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "very-dark-magenta": "hsl(300, 43%, 22%)",
        "soft-pink": "hsl(333, 80%, 67%)",
        "dark-grayish-magenta": "hsl(303, 10%, 53%)",
        "light-grayish-magenta": "hsl(300, 24%, 96%)",
      },
      backgroundImage: {
        "pattern-top-mobile": "url('../images/bg-pattern-top-mobile.svg')",
        "pattern-top-desktop": "url('../images/bg-pattern-top-desktop.svg')",
        "pattern-bottom-mobile":
          "url('../images/bg-pattern-bottom-mobile.svg')",
        "pattern-bottom-desktop":
          "url('../images/bg-pattern-bottom-desktop.svg')",
      },
    },
  },
  plugins: [],
};
