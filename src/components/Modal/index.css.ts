import { style } from "@vanilla-extract/css";

import {
  LESS_MOBILE_MEDIA_QUERY,
  MORE_TABLET_MEDIA_QUERY,
} from "@/consts/mediaQuery";

export const backdrop = style({
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(1, 1, 1, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  zIndex: "100", // TODO :: Refactor zIndex consts
});

export const mobileModalContainer = style({
  height: "100%",
  width: "100%",
  backgroundColor: "white",
  "@media": {
    [MORE_TABLET_MEDIA_QUERY]: {
      display: "none",
    },
  },
});

export const moreTabletModalContainer = style({
  height: "85%",
  width: "85%",
  margin: "0 auto",
  backgroundColor: "white",
  "@media": {
    [LESS_MOBILE_MEDIA_QUERY]: {
      display: "none",
    },
  },
});
