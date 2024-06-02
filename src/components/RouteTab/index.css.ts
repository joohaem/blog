import { style } from "@vanilla-extract/css";

export const tab = style({
  position: "relative",

  height: "100%",
  display: "flex",
  alignItems: "center",
});
export const tabOnBlack = style([
  tab,
  {
    color: "white",
  },
]);

export const inactiveTab = style([
  tab,
  {
    color: "rgba(0, 0, 0, 0.5)",

    ":hover": {
      color: "#010101",
    },
  },
]);
export const inactiveTabOnBlack = style([
  tab,
  {
    color: "rgba(255, 255, 255, 0.7)",

    ":hover": {
      color: "white",
    },
  },
]);
