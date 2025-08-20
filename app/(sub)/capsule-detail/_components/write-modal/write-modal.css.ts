import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  color: themeVars.color.white[85],
  background: themeVars.color.black["90_bg"],
  paddingLeft: "3.2rem",
  paddingRight: "3.2rem",
  borderRadius: 0,
  ...screen.md({
    width: "60rem",
  }),
  position: "relative",
});

export const sprinkleWrapper = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "block",

  ...screen.md({
    display: "none",
  }),
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "1.4rem",
  paddingBottom: "1.4rem",
});

export const chipContainer = style({
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",
});

export const closeButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  ...themeVars.text.B1,
  color: themeVars.color.white[40],

  ":hover": {
    background: themeVars.color.black["80"],
  },

  padding: "1rem 1.2rem",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  zIndex: 1,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  padding: "16px 0px 32px",
  ...themeVars.text.F17,
});

export const title = style({
  ...themeVars.text.B1,
  color: themeVars.color.purple[10],
  margin: 0,

  ":hover": {
    background: themeVars.color.black["80"],
  },

  padding: "1rem 1.2rem",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  zIndex: 1,
  selectors: {
    "&:disabled": {
      color: themeVars.color.white[30],
      cursor: "not-allowed",
    },
  },
});

export const capsuleInfo = style({
  textAlign: "center",
});

export const capsuleTitle = style({
  ...themeVars.text.H2,
  color: themeVars.color.white[100],
  marginBottom: "1rem",
});

export const timeCaption = style({
  ...themeVars.text.F14,
  color: themeVars.color.white[50],
});

export const imageCaption = style({
  ...themeVars.text.B2,
  color: themeVars.color.white[30],
  marginLeft: "0.6rem",
});

export const timeInfo = style({
  ...themeVars.text.B2,
  color: themeVars.color.white[85],
  display: "flex",
  flexDirection: "row",
  gap: "0.4rem",
  alignItems: "center",
  justifyContent: "center",
});

export const highlight = style({
  color: themeVars.color.white[100],
  fontWeight: "bold",
});

export const message = style({
  ...themeVars.text.B1,
  textAlign: "center",
  marginBottom: "2rem",
  color: themeVars.color.white[85],
});

export const imageButton = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  background: "none",
  border: `1px dashed ${themeVars.color.white[50]}`,
  borderRadius: "8px",
  padding: "1.2rem",
  width: "100%",
  color: themeVars.color.white[85],
  cursor: "pointer",
  marginBottom: "2rem",
});

export const inputSection = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "0 auto",
  gap: "0.6rem",
});

export const senderInput = style({
  background: themeVars.color.white[7],
  borderRadius: "12px",
  padding: "1.2rem 2.0rem",
  width: "100%",
  color: themeVars.color.white[85],
  "::placeholder": {
    color: themeVars.color.white[30],
  },
  zIndex: 1,
});

export const senderTitle = style({
  ...themeVars.text.F14,
  color: themeVars.color.white[30],
  marginLeft: "0.6rem",
});

export const textareaContainer = style({
  position: "relative",
  height: "38.8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: "0 auto",
});

export const imageAddButton = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  background: "none",

  padding: "0.8rem 1.2rem",
  cursor: "pointer",
  ...themeVars.text.F14,
  transition: "all 0.2s ease",
  color: themeVars.color.white[50],
});

export const plusIcon = style({
  fontSize: "2rem",
  fontWeight: "300",
  fill: "#bdbdbd",
});

export const plusIconWrapper = style({
  color: themeVars.color.white[50],
  fontSize: "1.4rem",
  fontWeight: "300",
  lineHeight: 1,
  border: "1px dashed #474747",
  borderRadius: "8px",
  padding: "0.7rem",
});

export const textareaDiv = style({
  position: "relative",
  background: themeVars.color.gradient.darkgray_bg_horizontal,
  border: "none",
  borderRadius: "12px",
  padding: "2rem",
  color: themeVars.color.white[85],
  width: "100%",
  height: "100%",
  resize: "none",
  boxSizing: "border-box",
  overflow: "scroll",
  "::placeholder": {
    color: themeVars.color.white[30],
  },
});
export const textarea = style({
  color: themeVars.color.white[85],
  width: "100%",
  resize: "none",
  height: "27rem",
});

export const imagePreviewContainer = style({
  position: "absolute",
  bottom: "1.6rem",
  left: "1.6rem",
});

export const imagePreview = style({
  borderRadius: "8px",
});

export const removeImageButton = style({
  position: "absolute",
  top: "0.4rem",
  right: "0.4rem",
  width: "2.2rem",
  height: "2.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
});

export const errorMessage = style({
  position: "absolute",
  bottom: "-2.4rem",
  left: "2rem",
  ...themeVars.text.F12,
  color: themeVars.color.white[100],
  fontWeight: "400",
  zIndex: 1,
});

export const imageAddButtonContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  bottom: "1.4rem",
  left: "0.8rem",
});

export const charCount = style({
  position: "absolute",
  right: "1.5rem",
  bottom: "1.5rem",
  ...themeVars.text.F15,
  color: themeVars.color.white[30],
  pointerEvents: "none",
});

export const senderInputContainer = style({
  position: "relative",
  width: "100%",
});

export const senderCharCount = style({
  position: "absolute",
  right: "1.5rem",
  top: "50%",
  transform: "translateY(-50%)",
  ...themeVars.text.F15,
  color: themeVars.color.white[30],
  pointerEvents: "none",
});
