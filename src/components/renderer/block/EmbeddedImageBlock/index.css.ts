import { style } from "@vanilla-extract/css";

export const imageWrapper = style({
  position: "relative",
  width: "100%",
  height: "300px",

  overflow: "clip",
});

export const image = style({
  objectFit: 'contain'
})