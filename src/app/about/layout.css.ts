import { style } from "@vanilla-extract/css";

export const tabsContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  rowGap: "16px",
  columnGap: "32px",
  flexWrap: "wrap",

  margin: "40px 0",

  "@media": {
    "screen and (min-width: 786px)": {
      justifyContent: "normal",
    },
  },
});
