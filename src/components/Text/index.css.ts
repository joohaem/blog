import { style } from "@vanilla-extract/css";

import { MORE_DESKTOP_MEDIA_QUERY } from "@/consts/mediaQuery";

export const mediumText = style({
  fontSize: "15px",
  lineHeight: "200%",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      fontSize: "16px",
    },
  },
});
export const smallText = style({
  fontSize: "13px",
  lineHeight: "200%",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      fontSize: "14px",
    },
  },
});

export const lightWeight = style({
  fontWeight: "300",
});
export const regularWeight = style({
  fontWeight: "400",
});
export const mediumWeight = style({
  fontWeight: "500",
});
