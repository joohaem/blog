import { style } from "@vanilla-extract/css";

export const contentsContainer = style({
  display: 'flex',
  gap: '30px',
  flexWrap: 'wrap',

  "@media": {
    "screen and (max-width: 1110px)": {
      padding: "0 18px"
    }
  }
})

export const content = style({
  flex: 1,
  minWidth: '350px',
  maxWidth: '378px',

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  "@media": {
    "screen and (max-width: 1110px)": {
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