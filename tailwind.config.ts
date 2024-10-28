import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
export default config;
