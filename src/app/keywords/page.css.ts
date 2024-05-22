import { style } from "@vanilla-extract/css";

export const contentContainer = style({
  marginTop: "20px",
  "@media": {
    "screen and (min-width: 786px)": {
      marginTop: "40px",
    },
  },
});
