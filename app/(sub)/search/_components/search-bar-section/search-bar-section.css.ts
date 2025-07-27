import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "2.5rem",
});

export const searchBarContainer = style({
  position: "relative",
  width: "100%",
  height: "100%",
});

export const searchBar = style({
  ...themeVars.text.B2,
  width: "100%",
  height: "4.8rem",
  color: themeVars.color.white[100],
  backgroundColor: themeVars.color.white[5],
  padding: "1.2rem 1.8rem 1.2rem 4.8rem",
  borderRadius: "12px",
  selectors: {
    "&::placeholder": {
      color: themeVars.color.white[40],
    },
  },
});

export const searchBarIcon = style({
  position: "absolute",
  left: "1.2rem",
  top: "50%",
  transform: "translateY(-50%)",
  width: "2.4rem",
  height: "2.4rem",
  color: themeVars.color.white[40],
  zIndex: 1,
});

export const closeButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  whiteSpace: "nowrap", // 텍스트가 줄바꿈되지 않도록 설정
  ...themeVars.text.B2,
  color: themeVars.color.white[70],
  padding: "1.2rem",
});
