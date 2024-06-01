import { keyframes, style } from "@vanilla-extract/css";

import {
  LESS_MOBILE_MEDIA_QUERY,
  MORE_TABLET_MEDIA_QUERY,
} from "@/consts/mediaQuery";

const fadeIn = keyframes({
  "0%": {
    opacity: "0",
  },
  "100%": {
    opacity: "1",
  },
});

const fadeInNGoUp = keyframes({
  "0%": {
    opacity: "0",
    transform: "translateY(120px)",
  },
  "100%": {
    opacity: "1",
    transform: "translateY(0px)",
  },
});

export const backdrop = style({
  animation: `${fadeIn} 0.3s ease`,
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
  animation: `${fadeInNGoUp} 0.3s ease`,
  position: "relative",
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
  animation: `${fadeInNGoUp} 0.3s ease`,
  position: "relative",
  height: "85%",
  width: "85%",
  margin: "0 auto",
  backgroundColor: "white",
  borderRadius: "10px 10px 0 0",
  "@media": {
    [LESS_MOBILE_MEDIA_QUERY]: {
      display: "none",
    },
  },
});

export const mobileCloseIcon = style({
  position: "absolute",
  top: "20px",
  right: "18px",
});

export const moreTabletCloseIcon = style({
  position: "absolute",
  top: "-28px",
  right: "8px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});
