import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";
export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  paddingTop: "3.2rem",
  ...screen.md({
    flexDirection: "row",
    justifyContent: "center",
  }),
});

export const button = style({
  ...themeVars.text.B1,
  cursor: "pointer",
  padding: "0.9rem 2.5rem",
  borderRadius: "13px",
  height: "5rem",
  backgroundColor: themeVars.color.black[70],
});

export const gradientButton = style({
  background: themeVars.color.gradient.purple,
});
