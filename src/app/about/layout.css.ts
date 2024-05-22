import { style } from "@vanilla-extract/css";

import { MORE_DESKTOP_MEDIA_QUERY } from "@/consts/mediaQuery";

export const tabsContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  rowGap: "16px",
  columnGap: "32px",
  flexWrap: "wrap",

  margin: "40px 0",

  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      justifyContent: "normal",
    },
  },
});
