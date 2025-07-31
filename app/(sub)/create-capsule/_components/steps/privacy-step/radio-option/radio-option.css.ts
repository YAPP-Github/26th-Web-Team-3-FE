import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const radioList = style({
  display: "flex",
  flexDirection: "row",
  gap: "1.6rem",
  width: "100%",
  height: "7.6rem",
  alignItems: "center",
  borderRadius: "16px",
  paddingLeft: "1.2rem",
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.black[80],
    },
  },
});

export const radio = style({
  appearance: "none",
  width: "2rem",
  height: "2rem",
  border: `3px solid ${themeVars.color.white[5]}`,
  borderRadius: "10px",
  transition: "all 0.3s ease",

  selectors: {
    "&:checked": {
      border: `5px solid ${themeVars.color.purple[50]}`,
      borderRadius: "1rem",
    },
  },
});

export const labelTitle = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[85],
});

export const labelDescription = style({
  ...themeVars.text.F16,
  color: themeVars.color.white[40],
});
