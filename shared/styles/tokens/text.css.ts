import { createGlobalTheme } from "@vanilla-extract/css";
import { colorTheme } from "./color.css";

// 현재 쓰이는 breakpoint는 800px
export const screenBreakpoints = {
  sm: "(min-width: 345px)",
  md: "(min-width: 800px)",
  lg: "(min-width: 1200px)",
} as const;

export const textTheme = createGlobalTheme(":root", {
  titleH1: {
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

  titleH2: {
    fontWeight: "600",
    fontSize: "2.4rem",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[100],
    "@media": {
      [screenBreakpoints.md]: {
        fontSize: "2.6rem",
      },
    },
  },

  titleH3: {
    fontWeight: "700",
    fontSize: "2rem",
    lineHeight: "1.4em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[100],
    "@media": {
      [screenBreakpoints.md]: {
        fontSize: "2.2rem",
      },
    },
  },

  bodyB1: {
    fontWeight: "500",
    fontSize: "1.7rem",
    lineHeight: "1.8em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[100],
    "@media": {
      [screenBreakpoints.md]: {
        fontSize: "1.8rem",
      },
    },
  },

  bodyB2: {
    fontWeight: "500",
    fontSize: "1.4rem",
    lineHeight: "1.5em",
    letterSpacing: "-0.02em",
    fontStyle: "italic",
    color: colorTheme.white[100],
    "@media": {
      [screenBreakpoints.md]: {
        fontSize: "1.5rem",
      },
    },
  },

  caption22: {
    fontWeight: "600",
    fontSize: "2.2rem",
    lineHeight: "1.4em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[85],
  },

  caption20: {
    fontWeight: "600",
    fontSize: "2rem",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[100],
  },

  caption17: {
    fontWeight: "600",
    fontSize: "1.7rem",
    lineHeight: "1.4em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[85],
  },

  caption16B: {
    fontWeight: "600",
    fontSize: "1.6rem",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: "#666666",
  },

  caption16: {
    fontWeight: "500",
    fontSize: "1.6rem",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[30],
  },

  caption15: {
    fontWeight: "500",
    fontSize: "1.5rem",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[85],
  },
  caption14: {
    fontWeight: "500",
    fontSize: "1.4rem",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[100],
  },

  caption12: {
    fontWeight: "500",
    fontSize: "1.2rem",
    lineHeight: "1.6em",
    letterSpacing: "-0.02em",
    color: colorTheme.white[70],
  },
});
