import { style } from "@vanilla-extract/css";

import { MORE_TABLET_MEDIA_QUERY } from "@/consts/mediaQuery";

export const contentContainer = style({
  marginTop: "20px",
  "@media": {
    [MORE_TABLET_MEDIA_QUERY]: {
      marginTop: "40px",
    },
  },
});
