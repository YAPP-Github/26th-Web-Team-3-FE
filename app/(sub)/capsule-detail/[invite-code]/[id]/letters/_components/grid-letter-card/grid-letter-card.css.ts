import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { keyframes, style } from "@vanilla-extract/css";

export const card = style({
  position: "relative",
  background: themeVars.color.gradient.darkgray_op,
  borderRadius: "12px",
  padding: "1.4rem 1.4rem 1rem 1.4rem",
  minWidth: "16.4rem",
  width: "100%",
  height: "20rem",
  aspectRatio: "1",
  cursor: "pointer",
  border: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  ...themeVars.text.F16,
  color: themeVars.color.white[85],
  lineHeight: "1.8em",
  gap: "0.4rem",

  ...screen.md({
    height: "26rem",
    minWidth: "24rem",
    padding: "1.8rem",
    gap: "0.8rem",
  }),
});

const shimmer = keyframes({
  "0%": { backgroundPosition: "-100% 0" },
  "100%": { backgroundPosition: "100% 0" },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
  overflow: "hidden",

  selectors: {
    '&[data-loaded="false"]': {
      backgroundColor: themeVars.color.black["90_bg"],
      backgroundImage: themeVars.color.gradient.darkgray_bg_horizontal,
      backgroundSize: "200% 100%",
      animation: `${shimmer} 4s  infinite`,
    },
  },
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
  ...screen.md({
    WebkitLineClamp: 6,
  }),
});

export const author = style({
  color: themeVars.color.white[40],
  marginRight: "0.6rem",
});
