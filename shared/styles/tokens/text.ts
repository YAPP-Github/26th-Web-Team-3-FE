import { colorTheme } from "./color";

import { screenBreakpoints } from "./screen";
export const textTheme = {
  H1: {
    fontWeight: "600",
    lineHeight: "1.6em",
    letterSpacing: "-0.03em",
    color: colorTheme.white[100],
    fontSize: "2.5rem",
    "@media": {
      [screenBreakpoints.md]: {
        fontSize: "3rem",
      },
    },
  },

  H2: {
    fontWeight: "600",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[100],
    fontSize: "2.4rem",
    "@media": {
      [screenBreakpoints.md]: {
        fontSize: "2.6rem",
      },
      [screenBreakpoints.lg]: {
        fontSize: "3rem",
      },
    },
  },

  H3: {
    fontWeight: "700",
    lineHeight: "1.4em",
    letterSpacing: "-0.03em",
    color: colorTheme.white[100],
    fontSize: "2rem",
    "@media": {
      [screenBreakpoints.md]: {
        fontSize: "2.2rem",
        lineHeight: "1.6em",
      },
    },
  },

  B1: {
    fontWeight: "500",
    lineHeight: "1.8em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[100],
    fontSize: "1.7rem",
    "@media": {
      [screenBreakpoints.md]: {
        fontSize: "1.8rem",
      },
    },
  },

  B2: {
    fontWeight: "500",
    lineHeight: "1.5em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[100],
    fontSize: "1.4rem",
    "@media": {
      [screenBreakpoints.md]: {
        fontSize: "1.5rem",
        lineHeight: "1.6em",
      },
    },
  },

  F22: {
    fontWeight: "600",
    lineHeight: "1.4em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[85],
    fontSize: "2.2rem",
  },

  F20: {
    fontWeight: "600",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[100],
    fontSize: "2rem",
  },

  F17: {
    fontWeight: "600",
    lineHeight: "1.4em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[85],
    fontSize: "1.7rem",
  },

  F16B: {
    fontWeight: "600",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: "#666666",
    fontSize: "1.6rem",
  },

  F16: {
    fontWeight: "500",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[30],
    fontSize: "1.6rem",
  },

  F15: {
    fontWeight: "500",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[85],
    fontSize: "1.5rem",
  },

  F14: {
    fontWeight: "500",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[100],
    fontSize: "1.4rem",
  },

  F12: {
    fontWeight: "500",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[70],
    fontSize: "1.2rem",
  },
} as const;
