import { style } from "@vanilla-extract/css";

import { MORE_DESKTOP_MEDIA_QUERY } from "@/consts/mediaQuery";

export const contentContainer = style({
  marginTop: "40px",
})

export const date = style({
  color: "rgba(0, 0, 0, 0.5)",
});

export const title = style({
  marginTop: "4px",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      marginTop: "8px",
    },
  },
});

export const content = style({
  marginTop: "4px",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      marginTop: "8px",
    },
  },
});

export const sentence = style({
  whiteSpace: 'pre-wrap',
  lineHeight: "180%",
  marginBottom: 8,
});

export const sentenceKo = style({
  color: "rgba(0, 0, 0, 0.7)",
})

export const divider = style({
  margin: "20px 0",
  border: "none",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
})
