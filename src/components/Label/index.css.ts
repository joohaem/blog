import { style } from "@vanilla-extract/css";

import { MORE_DESKTOP_MEDIA_QUERY } from "@/consts/mediaQuery";

export const xLargeTabLabel = style({
  fontSize: "18px",
  lineHeight: "150%",
  letterSpacing: "2.16px",
  // MEMO :: only mobile for now
});
export const largeTabLabel = style({
  fontSize: "15px",
  lineHeight: "150%",
  letterSpacing: "0.05em",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      fontSize: "16px",
    },
  },
});
export const largeLabel = style({
  fontSize: "11px",
  lineHeight: "150%",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      fontSize: "16px",
    },
  },
});
export const mediumLabel = style({
  fontSize: "11px",
  lineHeight: "150%",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      fontSize: "14px",
    },
  },
});

export const serifFont = style({
  fontFamily: "var(--font-nanum-myeongjo)",
});
