import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const homeContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export const mainContainer = style({
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: themeVars.zIndex.home.container,
});

export const image = style({
  width: "10rem",
  height: "10rem",
  maxWidth: "unset",
  pointerEvents: "auto",

  ...screen.md({
    width: "18rem",
    height: "18rem",
    maxWidth: "unset",
  }),
});

export const physicsContainer = style({
  position: "fixed",
  top: "6.4rem",
  left: 0,
  width: "100%",
  height: "calc(100% - 6.4rem)",
  zIndex: themeVars.zIndex.home.container,
  pointerEvents: "none", // 전체 영역에서 클릭 이벤트 비활성화
});

export const physicsElement = style({
  pointerEvents: "auto", // 물리 요소들만 클릭 이벤트 활성화
});
