import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",

  paddingBottom: "20px",
});

export const blocksContainer = style({
  display: "flex",
  flexDirection: "column",
});
