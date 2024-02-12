import { style } from "@vanilla-extract/css";

export const pageTitleRoot = style({
  height: "380px",
  backgroundColor: "#111",

  "@media": {
    "screen and (max-width: 480px)": {
      height: '262px',
    },
  },
});

export const container = style({
  position: "relative",
});

export const title = style({
  position: "absolute",
  bottom: "62px",
  left: "0",
  color: "#fff",

  "@media": {
    "screen and (max-width: 480px)": {
      left: '18px',
    },
    "screen and (min-width: 480px) and (max-width: 1194px)": {
      left: '30px',
    }
  },
});
