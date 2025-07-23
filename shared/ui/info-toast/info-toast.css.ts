import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { keyframes, style } from "@vanilla-extract/css";

const toastEnterFromBottom = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, 100%)" },
  "100%": { opacity: 1, transform: "translate(-50%, 0)" },
});

const toastExitToBottom = keyframes({
  "0%": { opacity: 1, transform: "translate(-50%, 0)" },
  "100%": { opacity: 0, transform: "translate(-50%, 100%)" },
});

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.6rem",
  ...themeVars.text.B1,
  color: themeVars.color.white[85],
  borderRadius: "24px",
  padding: "1.7rem 2.4rem",
  backgroundColor: themeVars.color.black[100],
  height: "5.25rem",
  width: "auto",
  position: "fixed",
  bottom: "10.4rem",
  left: "50%",
  ...screen.md({
    bottom: "16.7rem",
  }),
});

export const checkIcon = style({
  color: themeVars.color.semantic.green,
});

export const enter = style({
  animation: `${toastEnterFromBottom} 0.5s ease-out forwards`,
});

export const exit = style({
  animation: `${toastExitToBottom} 0.5s ease-in forwards`,
});
