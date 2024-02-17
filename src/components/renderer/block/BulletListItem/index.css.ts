import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
});

export const bullet = style({
  paddingRight: "8px",
});

export const bodyContainer = style({
  flex: "1",
  display: "flex",
  flexDirection: "column",
});
