import { themeVars } from "@/shared/styles/base/theme.css";
import { colorTheme } from "@/shared/styles/tokens/color";
import { screen } from "@/shared/styles/tokens/screen";
import { style, styleVariants } from "@vanilla-extract/css";

export const cardBase = style({
  position: "relative",
  zIndex: 2,
  width: "100%",
  height: "24.5rem",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  cursor: "pointer",
  backgroundColor: themeVars.color.white[5],

  ...screen.md({
    height: "30rem",
  }),
});

export const chipClass = style({
  ...themeVars.text.F12,
  height: "1.9rem",
  ...screen.md({
    ...themeVars.text.F14,
    height: "2.25rem",
  }),
});

export const cardGradientOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: 1,
});

export const cardContentWrapper = style({
  height: "50%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "1.4rem",
  gap: "0.7rem",

  ...screen.md({
    padding: "2rem",
    gap: "0.8rem",
  }),
});

export const cardTopWrapper = style({
  display: "flex",
  flexDirection: "row",
  gap: "1.4rem",
  alignItems: "center",
});

export const cardIcon = style({
  width: "7.6rem",
  height: "8rem",
});

export const cardIconWrapper = style({
  position: "relative",
  zIndex: 2,
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
  ...themeVars.text.F17,
  color: colorTheme.white[85],

  ...screen.md({
    ...themeVars.text.F22,
  }),
});

export const cardDescription = style({
  whiteSpace: "pre-wrap",
  ...themeVars.text.F14,
  color: colorTheme.white[60],
  gap: "0.4rem",
  display: "flex",
  flexDirection: "row",

  ...screen.md({
    ...themeVars.text.F15,
    color: colorTheme.white[50],
  }),
});
