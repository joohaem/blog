import { style } from "@vanilla-extract/css";

export const contentsContainer = style({
  width: '100%',
  display: 'flex',
  gap: '30px',
  flexWrap: 'wrap',
})

export const content = style({
  flex: 1,
  minWidth: '340px',
  maxWidth: '358px', // max 1/3 size

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  "@media": {
    "screen and (max-width: 1194px)": {
      maxWidth: 'none',
    }
  },

  ":hover": {
    boxShadow: '0 0 0 rgba(0, 0, 0, 0.07), 0 0 80px 80px rgba(0, 0, 0, 0.07)',
    background: 'rgba(0, 0, 0, 0.07)',
  },
  ":active": {
    boxShadow: '0 0 0 rgba(0, 0, 0, 0.07), 0 0 80px 80px rgba(0, 0, 0, 0.07)',
    background: 'rgba(0, 0, 0, 0.07)',
  }
});

export const contentImageWrapper = style({
  position: "relative",
  height: '300px',
})

export const descriptionWrapper = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  marginTop: '-4px',

  color: 'rgba(0, 0, 0, 0.5)',
})

export const contentImage = style({
  objectFit: 'cover'
})