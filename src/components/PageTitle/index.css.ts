import { style } from "@vanilla-extract/css";

import { MORE_DESKTOP_MEDIA_QUERY } from "@/consts/mediaQuery";

export const pageTitleRoot = style({
  height: "262px",
  backgroundColor: "#111",

  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
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
    [MORE_DESKTOP_MEDIA_QUERY]: {
      justifyContent: "normal",
      alignItems: "flex-end",

      paddingBottom: "48px",
    },
  },
});

export const title = style({
  color: "#fff",
});
