import { style } from "@vanilla-extract/css";

export const tab = style({
  position: "relative",

  height: "100%",
  display: "flex",
  alignItems: "center",
});

export const inactiveTab = style([
  tab,
  {
    color: "rgba(0, 0, 0, 0.5)",

    ":hover": {
      color: "#000",
    },
  },
]);