import { style } from "@vanilla-extract/css";

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
    "screen and (min-width: 768px)": {
      justifyContent: "flex-end",
      alignItems: "normal",

      textAlign: "start",

      paddingBottom: "48px !important",
    },
  },
});

export const articleTitle = style({
  marginTop: "10px",
  color: "#ffffff",
});

export const articleInfo = style({
  color: "rgba(255, 255, 255, 0.7)",
});

export const bodyContainer = style({
  paddingTop: "30px",
});
