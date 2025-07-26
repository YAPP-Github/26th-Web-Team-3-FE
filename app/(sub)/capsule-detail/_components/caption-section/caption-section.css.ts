import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  ...themeVars.text.B1,
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  ...screen.md({
    margin: "1.6rem",
  }),
  width: "100%",
  color: themeVars.color.white[85],
  background: themeVars.color.gradient.darkgray_op,
  borderRadius: "16px",
  padding: "1.6rem 3rem",
});
