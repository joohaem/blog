import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  height: "52px",
  overflowY: "hidden",

  margin: "0 auto",

  display: "flex",
  alignItems: "center",

  borderBottom: "0.5px solid #aaa",
});

export const headerLayout = style({
  width: "100%",
  height: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
});

export const tabsWrapper = style({
  height: "100%",

  display: "flex",
  alignItems: "center",
  gap: "28px",
});

export const tab = style({
  position: "relative",

  height: "100%",
  display: "flex",
  alignItems: "center",
});

export const inactiveTab = style([
  tab,
  {
    color: "#555",

    ":hover": {
      color: "#000",
    },
  },
]);
