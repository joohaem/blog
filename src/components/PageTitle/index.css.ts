import { style } from "@vanilla-extract/css";

export const pageTitleRoot = style({
  height: "262px",
  backgroundColor: "#000",
});

export const container = style({
  position: "relative",
});

export const title = style({
  position: "absolute",
  top: "155px",
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
