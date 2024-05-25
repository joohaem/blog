import { style } from "@vanilla-extract/css";

export const contentItem = style({
  padding: "14px 18px",
  borderRadius: "10px",
  border: "1px solid rgba(1, 1, 1, 0.30)",
  ":hover": {
    border: "1px solid #010101",
    cursor: "pointer",
  },
  marginTop: "20px",
  ":first-child": {
    marginTop: "0",
  },
});

export const contentCategory = style({
  marginTop: "8px",
});
