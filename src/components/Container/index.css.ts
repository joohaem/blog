import { style } from "@vanilla-extract/css";

import {
  MORE_BIG_DESKTOP_MEDIA_QUERY,
  MORE_TABLET_MEDIA_QUERY,
} from "@/consts/mediaQuery";

export const containerRoot = style({
  maxWidth: "1194px",
  height: "100%",
  margin: "0 auto",

  paddingLeft: "18px",
  paddingRight: "18px",
  "@media": {
    [MORE_TABLET_MEDIA_QUERY]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
    [MORE_BIG_DESKTOP_MEDIA_QUERY]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
});
