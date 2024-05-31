import { style } from "@vanilla-extract/css";

import { MORE_DESKTOP_MEDIA_QUERY } from "@/consts/mediaQuery";

export const thumbnailImageWrapper = style({
  position: "relative",
  width: "100%",
  height: "383px",

  overflow: "clip",

  backgroundColor: "rgba(1, 1, 1, 0.7)",
});

export const thumbnailImage = style({
  objectFit: "cover",
});

export const dimmedFilter = style({
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",

  backgroundColor: "rgba(1, 1, 1, 0.7)",
});

export const titleContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  textAlign: "center",

  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      justifyContent: "flex-end",
      alignItems: "normal",

      textAlign: "start",

      paddingBottom: "48px",
    },
  },
});

export const articleTitle = style({
  color: "#ffffff",
  marginTop: "6px",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      marginTop: "12px",
    },
  },
});

export const articleInfo = style({
  color: "rgba(255, 255, 255, 0.7)",
});

export const bodyContainer = style({
  paddingTop: "30px",
});
