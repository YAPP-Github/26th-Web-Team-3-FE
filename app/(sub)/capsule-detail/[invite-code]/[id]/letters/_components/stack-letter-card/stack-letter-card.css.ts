import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const card = style({
  width: "45rem",
  height: "45rem",
  background: themeVars.color.gradient.darkgray_bg_horizontal,
  padding: "2.4rem",
  borderRadius: "20px",
  display: "flex",
});

export const imageContainer = style({
  width: "24rem",
});

export const content = style({
  textAlign: "left",
});

export const text = style({
  fontSize: "1rem",
  lineHeight: 1.6,
  marginBottom: "1rem",
});

export const author = style({
  fontSize: "0.9rem",
  opacity: 0.8,
});
