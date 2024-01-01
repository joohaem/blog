import { style } from "@vanilla-extract/css";

export const largeEmphasizedText = style({
  fontSize: "47px",
  fontWeight: "500",
  lineHeight: "130%",
  letterSpacing: "-0.658px",

  "@media": {
    "screen and (min-width: 480px)": {
      fontSize: "35px",
      letterSpacing: "-0.28px",
    },
  },
});
export const midiumEmphasizedText = style({
  fontSize: "32px",
  fontWeight: "500",
  lineHeight: "130%",
  letterSpacing: "-0.192px",

  "@media": {
    "screen and (min-width: 480px)": {
      fontSize: "28px",
      letterSpacing: "-0.112px",
    },
  },
});
export const smallEmphasizedText = style({
  fontSize: "23px",
  fontWeight: "500",
  lineHeight: "130%",
  letterSpacing: "-0.046px",

  "@media": {
    "screen and (min-width: 480px)": {
      fontSize: "23px",
      letterSpacing: "-0.046px",
    },
  },
});
