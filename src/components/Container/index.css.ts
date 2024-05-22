import { style } from "@vanilla-extract/css";

export const containerRoot = style({
  maxWidth: "1194px",
  height: "100%",
  margin: "0 auto",

  paddingLeft: "18px",
  paddingRight: "18px",
  "@media": {
    "screen and (min-width: 480px) and (max-width: 1194px)": {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
    "screen and (min-width: 1194px)": {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
});
