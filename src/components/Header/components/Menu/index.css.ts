import { style } from "@vanilla-extract/css";

export const menu = style({
  cursor: "pointer",
});

export const backdropContainer = style({
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(1, 1, 1, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "100", // TODO :: Refactor zIndex consts
});

export const closeIcon = style({
  position: "fixed",
  top: "25px",
  right: "25px",
  cursor: "pointer",
});

export const routeTabLabelWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "33px",
});
