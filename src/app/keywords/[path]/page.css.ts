import { style } from "@vanilla-extract/css";

import {
  MORE_DESKTOP_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from "@/consts/mediaQuery";

// TODO :: Scroll? overflowY -> X button hidden
export const container = style({
  padding: "39px 0",
  "@media": {
    [TABLET_MEDIA_QUERY]: {
      padding: "25px 0",
    },
    [MORE_DESKTOP_MEDIA_QUERY]: {
      padding: "40px 0",
    },
  },
});

export const title = style({
  padding: "0 18px",
  marginBottom: "20px",
  "@media": {
    [TABLET_MEDIA_QUERY]: {
      textAlign: "center",
      padding: "0 25px",
      marginBottom: "25px",
    },
    [MORE_DESKTOP_MEDIA_QUERY]: {
      textAlign: "center",
      padding: "0 40px",
      marginBottom: "30px",
    },
  },
});

export const divider = style({
  width: "100%",
  height: "1px",
  backgroundColor: "rgba(1, 1, 1, 0.3)",
  marginBottom: "20px",
  "@media": {
    [TABLET_MEDIA_QUERY]: {
      marginBottom: "25px",
    },
    [MORE_DESKTOP_MEDIA_QUERY]: {
      marginBottom: "30px",
    },
  },
});

export const content = style({
  padding: "0 20px",
  "@media": {
    [TABLET_MEDIA_QUERY]: {
      padding: "0 25px",
    },
    [MORE_DESKTOP_MEDIA_QUERY]: {
      padding: "0 40px",
    },
  },
});
