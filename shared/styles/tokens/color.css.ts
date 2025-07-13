import { createGlobalTheme } from "@vanilla-extract/css";

export const colorTheme = createGlobalTheme(":root", {
  white: {
    100: "#FFFFFF",
    85: "rgba(255, 255, 255, 0.85)",
    70: "rgba(255, 255, 255, 0.70)",
    60: "rgba(255, 255, 255, 0.60)",
    50: "rgba(255, 255, 255, 0.50)",
    40: "rgba(255, 255, 255, 0.40)",
    30: "rgba(255, 255, 255, 0.30)",
    15: "rgba(255, 255, 255, 0.15)",
    5: "rgba(255, 255, 255, 0.05)",
    2: "rgba(255, 255, 255, 0.02)",
  },

  black: {
    100: "#070708",
    "90_bg": "#17171C",
    80: "#27272C",
  },

  purple: {
    90: "#32293D",
    50: "#9D41C4",
    10: "#CFA9DF",
  },

  semantic: {
    green: "#42FFBA",
    red: "#FF6E6E",
  },
});
