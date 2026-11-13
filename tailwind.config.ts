import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#879B78",
          50: "#F4F6F2",
          100: "#E6EBE2",
          200: "#D1DCCB",
          300: "#B8C9B0",
          400: "#9FB694",
          500: "#879B78",
          600: "#6F8261",
          700: "#57674C",
          800: "#3F4C37",
          900: "#273022",
        },
        fern: {
          DEFAULT: "#A9B99A",
          light: "#CAD6BE",
          dark: "#7B8E6A",
        },
        moss: {
          DEFAULT: "#D8DFC9",
          light: "#EBEFE3",
          dark: "#BDC7A9",
        },
        ivory: {
          DEFAULT: "#F4F0E5",
          light: "#FAF8F2",
          dark: "#E8E2D2",
        },
        terracotta: {
          DEFAULT: "#B68B6A",
          light: "#CFA98B",
          dark: "#986C4A",
          50: "#FAF5F0",
        },
        crimson: {
          DEFAULT: "#C87979",
          light: "#DE9E9E",
          dark: "#A95252",
          50: "#FBF3F3",
        },
        recycled: {
          DEFAULT: "#71977D",
          light: "#97B6A0",
          dark: "#51745C",
          50: "#F2F7F4",
        },
        gold: {
          DEFAULT: "#D6B879",
          light: "#E6D0A0",
          dark: "#B49451",
        },
        bark: {
          DEFAULT: "#806D5D",
          light: "#A49282",
          dark: "#5F4E40",
          900: "#362B22",
        },
        river: {
          DEFAULT: "#819DA3",
          light: "#A8BFC4",
          dark: "#5E7D84",
        },
        charcoal: {
          DEFAULT: "#262D24",
          light: "#3A4437",
          muted: "#5B6656",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(44, 51, 40, 0.06)",
        card: "0 8px 30px -4px rgba(44, 51, 40, 0.08)",
        elevated: "0 20px 40px -8px rgba(44, 51, 40, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
