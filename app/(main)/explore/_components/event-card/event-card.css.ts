import { themeVars } from "@/shared/styles/base/theme.css";
import { colorTheme } from "@/shared/styles/tokens/color";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const cardBase = style({
  position: "relative",
  border: "1.5px solid #4d4d4d",
  zIndex: 2,
  width: "100%",
  height: "24.5rem",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  cursor: "pointer",
  backgroundColor: themeVars.color.white[5],
  background: "linear-gradient(180deg, #202025 50%, #5B5D8E 100%)",
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
  background: "linear-gradient(90deg, #8CA8FA 0%, #886DF4 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  fontFamily: "Pretendard",
  fontSize: "1.4rem",
  fontStyle: "normal",
  fontWeight: "800",
  lineHeight: "140%",
  ...screen.md({
    fontSize: "1.6rem",
  }),
});

export const cardIcon = style({
  width: "12.6rem",
  height: "9.7rem",
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
