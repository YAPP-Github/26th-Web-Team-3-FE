import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "600px",
  margin: "0 auto",
});

export const stackContainer = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "26rem",
  height: "32rem",
  overflow: "visible",
  padding: "2rem",

  ...screen.md({
    width: "45rem",
    height: "45rem",
    padding: "3rem",
  }),
});

export const cardWrapper = style({
  width: "100%",
  height: "100%",
});

export const navButton = style({
  border: "none",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: themeVars.color.white[85],
  cursor: "pointer",
});

export const pagination = style({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px 16px",
  backgroundColor: "#27272c",
  overflow: "visible",
  alignContent: "center",
  flexWrap: "nowrap",
  gap: "3px",
  position: "absolute",
  borderRadius: "20px",
  bottom: "-60px",
  left: "50%",
  transform: "translateX(-50%)",
});

export const paginationCurrent = style({
  ...themeVars.text.F14,
  color: themeVars.color.white[100],
});

export const paginationTotal = style({
  ...themeVars.text.F14,
  color: themeVars.color.white[40],
});
