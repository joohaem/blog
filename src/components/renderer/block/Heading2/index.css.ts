import { style } from "@vanilla-extract/css";

export const text = style({
  marginTop: '24px',
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '1.6',
  "@media": {
    "screen and (min-width: 480px)": {
      fontSize: "24px",
    },
  },
})