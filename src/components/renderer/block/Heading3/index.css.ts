import { style } from "@vanilla-extract/css";

export const text = style({
  marginTop: '16px',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.6',
  "@media": {
    "screen and (min-width: 480px)": {
      fontSize: "20px",
    },
  },
})