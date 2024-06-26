import { style } from "@vanilla-extract/css";

import {
  LESS_DESKTOP_MEDIA_QUERY,
  LESS_MOBILE_MEDIA_QUERY,
  LESS_TABLET_MEDIA_QUERY,
  MORE_BIG_DESKTOP_MEDIA_QUERY,
  MORE_DESKTOP_MEDIA_QUERY,
  MORE_TABLET_MEDIA_QUERY,
} from "@/consts/mediaQuery";

export const mobileKeywordsWrapper = style({
  "@media": {
    [MORE_TABLET_MEDIA_QUERY]: {
      display: "none",
    },
  },
});
export const tabletKeywordsWrapper = style({
  width: "100%",
  display: "flex",
  gap: "30px",
  "@media": {
    [LESS_MOBILE_MEDIA_QUERY]: {
      display: "none",
    },
    [MORE_DESKTOP_MEDIA_QUERY]: {
      display: "none",
    },
  },
});
export const desktopKeywordsWrapper = style({
  width: "100%",
  display: "flex",
  gap: "30px",
  "@media": {
    [LESS_TABLET_MEDIA_QUERY]: {
      display: "none",
    },
    [MORE_BIG_DESKTOP_MEDIA_QUERY]: {
      display: "none",
    },
  },
});
export const bigDesktopKeywordsWrapper = style({
  width: "100%",
  display: "flex",
  gap: "30px",
  "@media": {
    [LESS_DESKTOP_MEDIA_QUERY]: {
      display: "none",
    },
  },
});

const getWidthByLineCount = (line: number, gap = 30) =>
  `calc((100% - ${gap * (line - 1)}px) / ${line})`;
export const oneLineOfTwoLinesContainer = style({
  width: getWidthByLineCount(2),
});
export const oneLineOfThreeLinesContainer = style({
  width: getWidthByLineCount(3),
});
export const oneLineOfFourLinesContainer = style({
  width: getWidthByLineCount(4),
});
