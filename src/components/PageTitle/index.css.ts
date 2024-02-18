import { style } from "@vanilla-extract/css";

export const pageTitleRoot = style({
  height: "262px",
  backgroundColor: "#111",

  "@media": {
    "screen and (min-width: 768px)": {
      height: "380px",
    },
  },
});

export const container = style({
  position: "relative",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media": {
    "screen and (min-width: 768px)": {
      justifyContent: "normal",
      alignItems: "flex-end",

      paddingBottom: "48px",
    },
  },
});

export const title = style({
  color: "#fff",
});
