import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
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
