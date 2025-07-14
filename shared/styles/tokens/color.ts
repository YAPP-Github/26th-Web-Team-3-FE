export const colorTheme = {
  white: {
    100: "#FFFFFF",
    85: "rgba(255, 255, 255, 0.85)",
    70: "rgba(255, 255, 255, 0.70)",
    60: "rgba(255, 255, 255, 0.60)",
    50: "rgba(255, 255, 255, 0.50)",
    40: "rgba(255, 255, 255, 0.40)",
    30: "rgba(255, 255, 255, 0.30)",
    15: "rgba(255, 255, 255, 0.15)",
    5: "rgba(255, 255, 255, 0.05)",
    2: "rgba(255, 255, 255, 0.02)",
  },

  black: {
    100: "#070708",
    "90_bg": "#17171C",
    80: "#27272C",
  },

  purple: {
    90: "#32293D",
    50: "#9D41C4",
    10: "#CFA9DF",
  },

  semantic: {
    green: "#42FFBA",
    red: "#FF6E6E",
  },

  gradient: {
    point_purple:
      "linear-gradient(rgba(119, 0, 156, 1) 0%, rgba(105, 44, 201, 1) 100%)",
    dark_purple:
      "linear-gradient(rgba(87, 2, 112, 0.41) 0%, rgba(63, 24, 125, 1) 100%)",
    light_purple:
      "linear-gradient(rgba(211, 153, 255, 1) 0%, rgba(148, 182, 255, 1) 100%)",
    card_red:
      "linear-gradient(rgba(0, 0, 0, 0.04) 60%, rgba(234, 53, 96, 0.16) 100%)",
    card_orange:
      "linear-gradient(rgba(0, 0, 0, 0.04) 60%, rgba(254, 158, 48, 0.16) 100%)",
    card_green:
      "linear-gradient(90deg,rgba(0, 0, 0, 0.04) 60%, rgba(87, 196, 126, 0.16) 100%)",
    card_blue:
      "linear-gradient(rgba(0, 0, 0, 0.04) 60%, rgba(97, 72, 252, 0.16) 100%)",
    card_skyblue:
      "linear-gradient(rgba(0, 0, 0, 0.04) 60%, rgba(0, 187, 241, 0.16) 100%)",
    card_yellow:
      "linear-gradient(90deg,rgba(0, 0, 0, 0.04) 60%, rgba(245, 243, 120, 0.16) 100%)",
    white_op:
      "linear-gradient(rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.08) 34%,rgba(0, 0, 0, 0.08) 66%, rgba(0, 0, 0, 0.04) 100%)",
    darkgray_op:
      "linear-gradient(rgba(38, 38, 42, 1) 0%, rgba(48, 48, 53, 1) 34%, rgba(48, 48, 53, 1) 66%, rgba(38, 38, 42, 1) 100%)",
    darkgray_bg:
      "linear-gradient(rgba(28, 28, 33, 1) 34%,  rgba(39, 39, 44, 1) 34%, rgba(39, 39, 44, 1) 66%, rgba(28, 28, 33, 1) 100%)",
    blue_bg:
      "linear-gradient(rgba(23, 23, 28, 1) 0%, rgba(103, 84, 226, 1) 100%)",
    header_bg:
      "linear-gradient(rgba(23, 23, 28, 1) 40%, rgba(23, 23, 28, 0) 100%)",
  },
} as const;
