import { style } from "@vanilla-extract/css";

import { MORE_DESKTOP_MEDIA_QUERY } from "@/consts/mediaQuery";

export const containerRoot = style({
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      display: "flex",
      flexDirection: "row-reverse",
      gap: "56px",
    },
  },
});

export const imageWrapper = style({
  flex: "1",

  position: "relative",
  height: "302px",

  marginBottom: "16px",

  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      height: "436px",

      marginBottom: "0",
    },
  },
});

export const text = style({
  flex: "1",

  lineHeight: "2 !important",
  textAlign: "justify",
});

export const image = style({
  objectFit: "cover",
});
