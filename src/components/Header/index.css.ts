import { style } from "@vanilla-extract/css";

export const header = style({
  maxWidth: "1194px",
  height: "52px",
  overflowY: "hidden",

  margin: "0 auto",
  padding: "0 18px",

  display: "flex",
  alignItems: "center",

  borderBottom: "0.5px solid #aaa",
});

export const leftWrapper = style({
  height: "100%",

  display: "flex",
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

  ":after": {
    content: "",
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "-2px",
    height: "6px",
    backgroundColor: "#3F2305",
    borderRadius: "6px",
  },
});
