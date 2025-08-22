import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { keyframes, style } from "@vanilla-extract/css";

export const card = style({
  background: themeVars.color.gradient.darkgray_op,
  borderRadius: "18px",
  display: "flex",
  boxShadow: `0px 0px 16px 0px ${themeVars.color.black["90_bg"]}`,
  padding: "1.6rem",
  ...themeVars.text.B1,
  width: "26rem",
  height: "32rem",
  flexDirection: "column",
  gap: "0.6rem",
  justifyContent: "space-between",
  cursor: "pointer",

  ...screen.md({
    width: "45rem",
    height: "45rem",
    padding: "2.4rem",
    gap: "1.2rem",
    borderRadius: "20px",
  }),
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  ...screen.md({
    gap: "1.2rem",
  }),
});

const shimmer = keyframes({
  "0%": { backgroundPosition: "-100% 0" },
  "100%": { backgroundPosition: "100% 0" },
});

export const image = style({
  width: "16rem",
  height: "16rem",
  objectFit: "cover",
  borderRadius: "14px",
  overflow: "hidden",

  selectors: {
    '&[data-loaded="false"]': {
      backgroundColor: themeVars.color.black["90_bg"],
      backgroundImage: themeVars.color.gradient.darkgray_bg_horizontal,
      backgroundSize: "200% 100%",
      animation: `${shimmer} 5s  infinite`,
    },
  },

  ...screen.md({
    width: "24rem",
    height: "24rem",
  }),
});

export const content = style({
  textAlign: "left",
});

export const author = style({
  color: themeVars.color.white[40],
  marginRight: "0.6rem",
});

export const contentWithImage = style({
  textAlign: "left",
  flex: 1,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  wordBreak: "break-word",
  ...screen.md({
    WebkitLineClamp: 4,
  }),
});

export const contentWithoutImage = style({
  textAlign: "left",
  flex: 1,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 9,
  overflow: "hidden",
  textOverflow: "ellipsis",
  wordBreak: "break-word",
  ...screen.md({
    WebkitLineClamp: 10,
  }),
});
