import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xl: "1440px", // Desktop HD
      lg: "1024px", // Desktop
      md: "768px", // Tablet
      sm: "320px", // Mobile
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem", // Mobile
          md: "3rem", // Tablet
          lg: "4rem", // Desktop
          xl: "5rem", // Desktop HD
        },
        screens: {
          sm: "100%", // Mobile - full width
          md: "100%", // Tablet - full width
          lg: "1024px", // Desktop - fixed width
          xl: "1440px", // Desktop HD - fixed width
        },
      },
      spacing: {
        "2": "8px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "30": "120px",
      },
      colors: {
        primary: "#3377FF", // Main Color
        "primary-darker": "#2659BF", // Darker
        "primary-lighter": "#99BBFF", // Lighter
        "primary-subtle": "#E3EDFF", // Subtle

        // State Colors
        error: "#FF3B3B",
        "error-darker": "#E53535",
        "error-lighter": "#FF5C5C",
        "error-subtle": "#FF8080",

        warning: "#FFCC00",
        "warning-darker": "#E5B800",
        "warning-lighter": "#FDDD48",
        "warning-subtle": "#FDED72",

        info: "#0063F7",
        "info-darker": "#004FC4",
        "info-lighter": "#5B8DEF",
        "info-subtle": "#9DBFF9",

        success: "#06C270",
        "success-darker": "#05A660",
        "success-lighter": "#39D98A",
        "success-subtle": "#57EBA1",

        // Dark Colors
        "dark-1": "#3A3A3C",
        "dark-2": "#6B7588",
        "dark-3": "#8F90A6",
        "dark-4": "#C7C9D9",

        // Light Colors
        "light-1": "#DDE5E9",
        "light-2": "#EBEBF0",
        "light-3": "#F2F2F5",
        "light-4": "#FAFAFC",

        background: "var(--background)",
        foreground: "var(--foreground)",
        romanticBlue: {
          0: "hsl(240,53%,17%)",
          10: "hsl(240,54%,27%)",
          20: "hsl(240, 54%, 48%)",
          30: "hsl(240, 100%,67%)",
          40: "hsl(240, 100%, 75%)",
          50: "hsl(240, 100%, 82%)",
          60: "hsl(240, 100%, 87%)",
          70: "hsl(240, 100%, 92%)",
          80: "hsl(240, 100%, 95%)",
          90: "hsl(240, 100%, 98%)",
          100: "hsl(240,100%,100%)",
        },
        joustBlue: {
          0: "hsl(210, 54%, 11%)",
          10: "hsl(211, 53%, 17%)",
          20: "hsl(210, 54%, 31%)",
          30: "hsl(210, 54%, 45%)",
          40: "hsl(210, 73%, 58%)",
          50: "hsl(210, 100%, 69%)",
          60: "hsl(210, 100%, 79%)",
          70: "hsl(210, 100%, 87%)",
          80: "hsl(210, 100%, 93%)",
          90: "hsl(208, 100%, 97%)",
          100: "hsl(210, 100%, 99%)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      fontWeight: {
        extralight: "200",
        regular: "400",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        "display-1": ["48px", { fontWeight: "200", lineHeight: "1.3" }],
        "display-2": ["40px", { fontWeight: "200", lineHeight: "1.3" }],

        "heading-1": ["44px", { fontWeight: "700", lineHeight: "1.3" }],
        "heading-2": ["36px", { fontWeight: "700", lineHeight: "1.3" }],
        "heading-3": ["28px", { fontWeight: "700", lineHeight: "1.3" }],
        "heading-4": ["24px", { fontWeight: "700", lineHeight: "1.3" }],
        "heading-5": ["20px", { fontWeight: "700", lineHeight: "1.3" }],
        "heading-6": ["16px", { fontWeight: "700", lineHeight: "1.3" }],

        "lead-paragraph": ["22px", { fontWeight: "400", lineHeight: "1.5" }],

        "body-lg-r": ["20px", { fontWeight: "400", lineHeight: "1.7" }],
        "body-lg-s": ["20px", { fontWeight: "600", lineHeight: "1.7" }],
        "body-md-r": ["18px", { fontWeight: "400", lineHeight: "1.7" }],
        "body-md-s": ["18px", { fontWeight: "600", lineHeight: "1.7" }],
        "body-base-r": ["16px", { fontWeight: "400", lineHeight: "1.7" }],
        "body-base-s": ["16px", { fontWeight: "600", lineHeight: "1.7" }],
        "body-sm-r": ["14px", { fontWeight: "400", lineHeight: "1.7" }],
        "body-sm-s": ["14px", { fontWeight: "600", lineHeight: "1.7" }],
      },
    },
  },
  plugins: [],
};
export default config;
