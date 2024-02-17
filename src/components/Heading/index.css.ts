import { style } from "@vanilla-extract/css";

export const largeDisplayHeading = style({
  fontSize: "52px",
  lineHeight: "150%",
  letterSpacing: "0.15em",
});
export const mediumDisplayHeading = style({
  fontSize: "40px",
  lineHeight: "150%",
});
export const mediumTitleHeading = style({
  fontSize: "20px",
  lineHeight: "150%",
});
export const smallTitleHeading = style({
  fontSize: "18px",
  lineHeight: "150%",
});
export const extraSmallTitleHeading = style({
  fontSize: "16px",
  lineHeight: "150%",
});

export const extraLightWeight = style({
  fontWeight: '200'
})
export const lightWeight = style({
  fontWeight: '300'
})
export const mediumWeight = style({
  fontWeight: '500'
})
export const semiBoldWeight = style({
  fontWeight: '600'
})

export const serifFont = style({
  fontFamily: 'var(--font-source-serif-4)'
})