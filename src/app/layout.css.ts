import { style } from "@vanilla-extract/css";

export const bodyContainer = style({
  minHeight: "100vh",
  paddingBottom: "64px",
});

export const resetFontSmoothingForFigmaDesign = style({
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  fontSmooth: "never",
});
