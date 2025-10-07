import { themeVars } from "@/shared/styles/base/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

// 애니메이션 키프레임 정의
const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-10px) scale(0.5)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0) scale(1)",
  },
});

const slideOut = keyframes({
  from: {
    opacity: 1,
    transform: "translateY(0) scale(1)",
  },
  to: {
    opacity: 0,
    transform: "translateY(-10px) scale(0.5)",
  },
});

export const dropdownWrapper = style({
  position: "relative",
  borderRadius: "15px",
  zIndex: themeVars.zIndex.dropdown.content,
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
  width: "18rem",
  flexDirection: "column",
  backgroundColor: themeVars.color.black[70],
  padding: "0.6rem",
  borderRadius: "15px",
  boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.10)",
  animation: `${slideIn} 0.15s ease-out`,
  transformOrigin: "top right",
});

export const dropdownContentLeft = style({
  right: "auto",
  left: 0,
  transformOrigin: "top left",
});

// 닫힐 때 애니메이션을 위한 스타일
export const dropdownContentClosing = style({
  animation: `${slideOut} 0.15s ease-in`,
});

export const dropdownItem = style({
  display: "flex",
  width: "100%",
  height: "4.8rem",
  padding: "1.6rem 2rem",
  whiteSpace: "nowrap",
  alignItems: "center",
  justifyContent: "space-between",
  ...themeVars.text.F16,
  borderRadius: "8px",
  color: themeVars.color.white[100],
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.white[5],
    },
  },
});

export const itemContent = style({
  display: "flex",
  alignItems: "center",
});

export const selectedItem = style({
  color: themeVars.color.purple[50],
});

export const checkIcon = style({
  color: themeVars.color.purple[50],
});
