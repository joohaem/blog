import { style } from "@vanilla-extract/css";

export const contentsContainer = style({
  width: "100%",
  display: "flex",
  gap: "30px",
  flexWrap: "wrap",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  width: "100%",
  "@media": {
    "screen and (min-width: 768px) and (max-width: 1194px)": {
      width: "calc((100% - 30px) / 2)"
    },
    "screen and (min-width: 1194px)": {
      width: "calc((100% - 60px) / 3)"
    },
  },

  ":hover": {
    boxShadow: "0 0 0 rgba(0, 0, 0, 0.07), 0 0 80px 80px rgba(0, 0, 0, 0.07)",
    background: "rgba(0, 0, 0, 0.07)",
  },
  ":active": {
    boxShadow: "0 0 0 rgba(0, 0, 0, 0.07), 0 0 80px 80px rgba(0, 0, 0, 0.07)",
    background: "rgba(0, 0, 0, 0.07)",
  },
});

export const contentImageWrapper = style({
  position: "relative",
  height: "302px",
});

export const descriptionWrapper = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  marginTop: "-4px",

  color: "rgba(0, 0, 0, 0.5)",
});

export const contentImage = style({
  objectFit: "cover",
});
