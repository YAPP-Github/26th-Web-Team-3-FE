const screen = {
  sm: (css: React.CSSProperties) => {
    return {
      "@media": {
        "(min-width: 345px)": css,
      },
    };
  },
  md: (css: React.CSSProperties) => {
    return {
      "@media": {
        "(min-width: 800px)": css,
      },
    };
  },
  lg: (css: React.CSSProperties) => {
    return {
      "@media": {
        "(min-width: 1200px)": css,
      },
    };
  },
} as const;

export default screen;
