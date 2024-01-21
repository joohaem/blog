import { style } from "@vanilla-extract/css";

export const chip = style({
  cursor: "pointer",
  borderRadius: "12px",
  padding: "12px 8px",

  transition: "all",
});
export const activeChip = style([
  chip,
  {
    border: "1px solid #eeeeee",
    backgroundColor: "#eeeeee",
  },
]);
export const inactiveChip = style([
  chip,
  {
    border: "1px solid #000",
    backgroundColor: "#000",
    color: "#fff",
    ":hover": {
      border: "1px solid #eeeeee",
      backgroundColor: "#eeeeee",
    },
  },
]);
