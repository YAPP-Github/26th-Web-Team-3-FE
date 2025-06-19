import { style } from "@vanilla-extract/css";

// TODO: 추후 디자인에 맞게 변경, 스타일 예시 코드
export const buttonStyle = style({
  borderRadius: "10px",
  backgroundColor: "#8c92ff",
  fontSize: "24px",
});

export const primaryButton = style({
  color: "white",
  backgroundColor: "#fff",

  ":hover": {
    backgroundColor: "#1976d2",
  },
});

export const secondaryButton = style({
  color: "#333",
  backgroundColor: "transparent",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",

  ":hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
});

export const smallButton = style({
  fontSize: "12px",
  padding: "10px 16px",
});

export const mediumButton = style({
  fontSize: "14px",
  padding: "11px 20px",
});

export const largeButton = style({
  fontSize: "16px",
  padding: "12px 24px",
});
