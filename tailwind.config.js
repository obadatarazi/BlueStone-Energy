/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#003a70",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#035587",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#007dba",
          foreground: "#FFFFFF",
          light: "#339fd4",
          dark: "#005f94",
        },
        muted: {
          DEFAULT: "#E6E8EA",
          foreground: "#035587",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      spacing: {
        '15': '3.75rem',
      },
    },
  },
  plugins: [],
}
