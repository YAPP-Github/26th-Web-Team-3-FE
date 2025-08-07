import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  ...themeVars.text.B1,
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  padding: "1.6rem 2.4rem",
  gap: "3.2rem",
  background: themeVars.color.gradient.darkgray_op,
  borderRadius: "16px",
  ...screen.md({
    marginBottom: "24rem",
  }),
});

export const iconStyle = style({
  width: "2.4rem",
  height: "2.4rem",
  color: themeVars.color.white[40],
});

export const textStyle = style({
  color: themeVars.color.white[40],
});
