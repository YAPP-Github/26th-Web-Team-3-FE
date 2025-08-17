import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const modalOverlay = style({
  alignItems: "center",
});

export const modalContent = style({
  background: themeVars.color.gradient.darkgray_op,
  padding: "2rem",
  ...themeVars.text.B1,
  color: themeVars.color.white[85],
  minWidth: "30rem",
  minHeight: "30rem",
  position: "relative",

  ...screen.md({
    padding: "3.2rem",
    width: "70rem",
    height: "55rem",
  }),
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  height: "100%",
  alignItems: "center",
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  flex: 1,
});

export const image = style({
  flexShrink: 0,
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "14px",
  ...screen.md({
    width: "30rem",
    height: "30rem",
  }),
});

export const content = style({
  textAlign: "left",
  flex: 1,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 5,
  overflow: "hidden",
  textOverflow: "ellipsis",
  wordBreak: "break-word",
  paddingBottom: "3.8rem",
  ...screen.md({
    WebkitLineClamp: 6,
    paddingBottom: "4.6rem",
  }),
});

export const from = style({
  position: "absolute",
  bottom: "2rem",
  ...screen.md({
    bottom: "3.2rem",
  }),
});

export const author = style({
  color: themeVars.color.white[40],
  marginRight: "0.6rem",
});
