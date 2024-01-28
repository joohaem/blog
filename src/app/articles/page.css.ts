import { style } from "@vanilla-extract/css";

export const categoryChipsWrapper = style({
  position: "sticky",
  top: "0",

  display: "flex",
  gap: "8px",

  padding: "40px 0 0",
});

export const articleListContainer = style({
  display: "flex",
  gap: '20px',
  justifyContent: "space-between",
  padding: "40px 0 0",
});

export const articleInfoSection = style({
  color: '#6c757d',
  marginBottom: '4px',
});

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
