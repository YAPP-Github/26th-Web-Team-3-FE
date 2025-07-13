import { colorTheme } from "@/shared/styles/tokens/color.css";
import { screenTheme } from "@/shared/styles/tokens/screen.css";
import { textTheme } from "@/shared/styles/tokens/text.css";
import { style } from "@vanilla-extract/css";

export const navHomeStyle = style({
  display: "flex",
  position: "fixed",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "6.4rem",
  padding: "1rem",
  backgroundColor: colorTheme.gradient.header_bg,
  ...screenTheme.md({}),
  ...screenTheme.lg({}),
});

export const buttonWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.6rem",
  padding: "0.4rem 0rem",
});

export const buttonStyle = style({
  padding: "0.4rem 1rem",
  height: "4.2rem",
  borderRadius: "8px",
  ...textTheme.caption15,
  ":hover": {
    backgroundColor: colorTheme.white[5],
    color: colorTheme.purple[10],
  },
  transition: "all 0.2s ease-in-out",
});

export const searchButtonStyle = style({
  width: "4.4rem",
  height: "4.4rem",
});
