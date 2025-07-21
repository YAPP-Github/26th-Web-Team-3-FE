import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const layout = style({
  width: "32.4rem",
  height: "38.95rem",
});

export const title = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.3rem",
  marginTop: "0.4rem",
  marginBottom: "1rem",
});

export const putButton = style({
  color: themeVars.color.purple[10],
});
