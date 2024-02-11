import { style } from "@vanilla-extract/css";

export const containerRoot = style({
  "@media": {
    "screen and (min-width: 786px)": {
      display: "flex",
      flexDirection: "row-reverse",
      gap: "56px",
    }
  }
})

export const imageWrapper = style({
  flex: "1",

  position: "relative",

  height: "436px",

  marginBottom: "16px",
  "@media": {
    "screen and (min-width: 786px)": {
      marginBottom: "0"
    }
  }
})

export const image = style({
  objectFit: "cover"
})

export const text = style({
  flex: "1",

  lineHeight: "2 !important"
})

export const textLink = style({
  textDecoration: "#6d6875 wavy underline",

  ":hover": {
    fontWeight: "500"
  }
})
