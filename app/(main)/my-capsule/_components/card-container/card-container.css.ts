import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  display: "grid",
  gap: "1.2rem",
  rowGap: "3.2rem",
  width: "100%",
  padding: "1.6rem",
  paddingTop: "2.3rem",
  margin: "0 auto",
  paddingBottom: "7.2rem",
  gridTemplateColumns: "repeat(2, 1fr)",

  // 정확한 반응형 적용하기 위해 미디어 쿼리 직접 사용
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "(min-width: 1024px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
});
