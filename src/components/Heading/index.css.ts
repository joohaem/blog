import { style } from "@vanilla-extract/css";

import { MORE_DESKTOP_MEDIA_QUERY } from "@/consts/mediaQuery";

export const largeDisplayHeading = style({
  fontSize: "30px",
  lineHeight: "150%",
  letterSpacing: "3.6px",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      fontSize: "44px",
      letterSpacing: "5.28px",
    },
  },
});
export const mediumDisplayHeading = style({
  fontSize: "22px",
  lineHeight: "150%",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      fontSize: "38px",
    },
  },
});
export const mediumTitleHeading = style({
  fontSize: "17px",
  lineHeight: "150%",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      fontSize: "20px",
    },
  },
});
export const smallTitleHeading = style({
  fontSize: "16px",
  lineHeight: "150%",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      fontSize: "18px",
    },
  },
});
export const extraSmallTitleHeading = style({
  fontSize: "15px",
  lineHeight: "150%",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      fontSize: "16px",
    },
  },
});

export const extraLightWeight = style({
  fontWeight: "200",
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
export const semiBoldWeight = style({
  fontWeight: "600",
});

export const serifFont = style({
  fontFamily: "var(--font-nanum-myeongjo)",
});
