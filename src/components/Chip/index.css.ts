import { style } from "@vanilla-extract/css";

export const chip = style({
  cursor: "pointer",
  borderRadius: "12px",
  padding: "12px 8px",

  transition: "all",
});
export const activeChip = style([
  chip,
]);
export const inactiveChip = style([
  chip,
  {
    color: "rgba(0, 0, 0, 0.5)",
    ":hover": {
      color: "#010101",
    },
  },
]);
