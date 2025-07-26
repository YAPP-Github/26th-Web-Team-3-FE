import { colorTheme } from "@/shared/styles/tokens/color";
import { screenBreakpoints } from "@/shared/styles/tokens/screen";
import { textTheme } from "@/shared/styles/tokens/text";
import { style, styleVariants } from "@vanilla-extract/css";

export const cardBase = style({
  minWidth: "16rem",
  width: "100%",
  height: "24.5rem",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  cursor: "pointer",

  transition: "all 0.3s ease",

  ":hover": {
    opacity: 0.6,
    transform: "scale(1) rotate(0deg) skew(0deg, 0deg) translate(0px, -15px)",
  },

  "@media": {
    [screenBreakpoints.md]: {
      height: "30rem",
      width: "27.7rem",
      minWidth: "24rem",
    },
  },
});

export const chipClass = style({
  fontSize: textTheme.F12.fontSize,
  fontWeight: textTheme.F12.fontWeight,
  lineHeight: textTheme.F12.lineHeight,
  letterSpacing: textTheme.F12.letterSpacing,
  height: "1.9rem",
  "@media": {
    [screenBreakpoints.md]: {
      fontSize: textTheme.F14.fontSize,
      fontWeight: textTheme.F14.fontWeight,
      lineHeight: textTheme.F14.lineHeight,
      letterSpacing: textTheme.F14.letterSpacing,
      height: "2.25rem",
    },
  },
});

export const cardContentWrapper = style({
  height: "50%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "1.4rem",
  gap: "0.7rem",

  "@media": {
    [screenBreakpoints.md]: {
      padding: "2rem",
      gap: "0.8rem",
    },
  },
});

export const cardIcon = style({
  width: "7.6rem",
  height: "8rem",
});

export const cardIconWrapper = style({
  position: "relative",
  width: "100%",
  height: "50%",
  padding: "2rem",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
});

export const cardVariants = styleVariants({
  gradient1: {
    background: colorTheme.gradient.card_red,
  },
  gradient2: {
    background: colorTheme.gradient.card_blue,
  },
  gradient3: {
    background: colorTheme.gradient.card_orange,
  },
  gradient4: {
    background: colorTheme.gradient.card_skyblue,
  },
  gradient5: {
    background: colorTheme.gradient.card_green,
  },
  gradient6: {
    background: colorTheme.gradient.card_yellow,
  },
});

export const cardTitle = style({
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
  wordBreak: "break-word",
  ...textTheme.F17,
  color: colorTheme.white[85],

  "@media": {
    [screenBreakpoints.md]: {
      ...textTheme.F22,
    },
  },
});

export const cardDescription = style({
  whiteSpace: "pre-wrap",
  ...textTheme.F14,
  color: colorTheme.white[60],
  gap: "0.4rem",
  display: "flex",
  flexDirection: "row",

  "@media": {
    [screenBreakpoints.md]: {
      ...textTheme.F15,
      color: colorTheme.white[50],
    },
  },
});
