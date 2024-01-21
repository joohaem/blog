import { style } from "@vanilla-extract/css";

export const catergoryChipsWrapper = style({
  position: "sticky",
  top: "0",

  display: "flex",
  gap: "8px",

  padding: "16px 12px",
});

export const articleListContainer = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "40px 24px",
});

export const articleInfoSection = style({});

export const thumbnailWrapper = style({
  width: "140px",
  height: "140px",

  display: "flex",
  justifyContent: "center",
  overflow: "hidden",

  marginTop: "25px",
});

export const thumbnailImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
