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
  ...themeVars.text.B1,
  cursor: "pointer",
  padding: "0.9rem 2.5rem",
  borderRadius: "13px",
  height: "5rem",
  position: "relative",

  "::after": {
    content: '""',
    position: "absolute",
    top: "-2px",
    left: "-2px",
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
    zIndex: -1,
    borderRadius: "13px",
    background:
      "conic-gradient(from 0deg at 50% 50%, #ffffff 3deg, rgba(255, 255, 255, 0) 50deg, rgba(234, 234, 234, 0) 126deg, rgba(253, 253, 253, 0.89285) 178deg, rgba(210, 210, 210, 0) 234deg, rgba(184, 184, 184, 0) 309deg, rgb(255, 255, 255) 360deg)",
  },
});
