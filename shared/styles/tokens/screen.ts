import type { CSSProperties } from "react";

export const screen = {
  sm: (css: CSSProperties) => ({
    "@media": {
      "(min-width: 345px)": css,
    },
  }),

  md: (css: CSSProperties) => ({
    "@media": {
      "(min-width: 800px)": css,
    },
  }),

  lg: (css: CSSProperties) => ({
    "@media": {
      "(min-width: 1200px)": css,
    },
  }),
} as const;

export const screenBreakpoints = {
  sm: "(min-width: 345px)",
  md: "(min-width: 800px)",
  lg: "(min-width: 1200px)",
} as const;
