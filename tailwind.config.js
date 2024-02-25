/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Upright", "serif"], // Add your font as a base, followed by fallback fonts
      },
    },
  },
  plugins: [
    require("cssnano")({
      preset: "default",
    }),
    require("@fullhuman/postcss-purgecss")({
      content: ["./**/*.html"],
    }),
    "prettier-plugin-tailwindcss",
  ],
};
