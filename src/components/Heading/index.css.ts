import { style } from "@vanilla-extract/css";

export const largeDisplayHeading = style({
  fontSize: "36px",
  lineHeight: "150%",
  letterSpacing: "0.15em",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "52px",
    },
  },
});
export const mediumDisplayHeading = style({
  fontSize: "24px",
  lineHeight: "150%",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "40px",
    },
  },
});
export const mediumTitleHeading = style({
  fontSize: "17px",
  lineHeight: "150%",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "20px",
    },
  },
});
export const smallTitleHeading = style({
  fontSize: "16px",
  lineHeight: "150%",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "18px",
    },
  },
});
export const extraSmallTitleHeading = style({
  fontSize: "15px",
  lineHeight: "150%",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "16px",
    },
  },
});

export const extraLightWeight = style({
  fontWeight: "200",
});
export const lightWeight = style({
  fontWeight: "300",
});
export const regularWeight = style({
  fontWeight: "400",
});
export const mediumWeight = style({
  fontWeight: "500",
});
export const semiBoldWeight = style({
  fontWeight: "600",
});

export const serifFont = style({
  fontFamily: "var(--font-source-serif-4)",
});
