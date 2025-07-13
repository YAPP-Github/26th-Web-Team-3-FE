import { colorTheme } from "@/shared/styles/tokens/color.css";
import { screenTheme } from "@/shared/styles/tokens/screen.css";
import { textTheme } from "@/shared/styles/tokens/text.css";
import { style } from "@vanilla-extract/css";

export const navHomeStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "1rem",
  ...screenTheme.md({}),
  ...screenTheme.lg({}),
});

export const buttonWrapper = style({
  display: "flex",
  gap: "1.6rem",
  padding: "0.4rem 0rem",
});

export const buttonStyle = style({
  padding: "0.4rem 1rem",
  height: "3.6rem",
  ...textTheme.caption15,
  ":hover": {
    backgroundColor: colorTheme.black["90_bg"],
    color: colorTheme.purple[10],
    borderRadius: "8px",
  },
});
