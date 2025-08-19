import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  paddingTop: "6rem",
  ...screen.md({
    paddingTop: "16.5rem",
  }),
  zIndex: themeVars.zIndex.home.content,
});

export const homeTitleSection = style({
  fontWeight: "600",
  lineHeight: "1.6em",
  letterSpacing: "-0.03em",
  fontSize: "2.8rem",
  color: themeVars.color.white[100],
  ...screen.md({
    fontSize: "4.5rem",
  }),
  zIndex: themeVars.zIndex.home.content,
});
