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
  },
  background: {
    normal: "#17171C",
    elevated: "#27272C",
  },
  point: {
    primary: "#CFA9DF",
    secondary: "#9D41C4",
    dark: "#32293D",
  },
  btn: {
    disabled: "#343438",
  },
});
