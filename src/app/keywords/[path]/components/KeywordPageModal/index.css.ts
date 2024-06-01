import { style } from "@vanilla-extract/css";

import {
  MORE_DESKTOP_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from "@/consts/mediaQuery";

export const container = style({
  display: "flex",
  flexDirection: "column",
});

export const title = style({
  padding: "39px 18px 0",
  marginBottom: "20px",
  "@media": {
    [TABLET_MEDIA_QUERY]: {
      textAlign: "center",
      padding: "25px 25px 0",
      marginBottom: "25px",
    },
    [MORE_DESKTOP_MEDIA_QUERY]: {
      textAlign: "center",
      padding: "40px 40px 0",
      marginBottom: "30px",
    },
  },
});

export const divider = style({
  width: "100%",
  height: "1px",
  backgroundColor: "rgba(1, 1, 1, 0.3)",
});

export const content = style({
  height: "100%",
  overflowY: "auto",
  padding: "20px 20px 39px",
  "@media": {
    [TABLET_MEDIA_QUERY]: {
      padding: "25px",
    },
    [MORE_DESKTOP_MEDIA_QUERY]: {
      padding: "30px 40px 40px",
    },
  },
});
