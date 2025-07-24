import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const dropdownWrapper = style({
  position: "absolute",
  zIndex: themeVars.zIndex.dropdown.content,
  borderRadius: "15px",
});

export const triggerBtnStyle = style({
  padding: "1.1rem",
  color: themeVars.color.white[60],
});

export const dropdownContent = style({
  position: "absolute",
  right: 0,
  top: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: themeVars.color.black[70],
  padding: "0.6rem",
  borderRadius: "15px",
});

export const dropdownItem = style({
  display: "flex",
  padding: "1.6rem 2rem",
  whiteSpace: "nowrap",
  alignItems: "center",
  ...themeVars.text.F16,
  color: themeVars.color.white[100],
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.white[5],
    },
  },
});
