import { style } from "@vanilla-extract/css";


export const bold = style({
  fontWeight: '600'
})

export const underline = style({
  textDecoration: 'underline'
})

export const italic = style({
  fontStyle: 'italic'
})

export const strikethrough = style({
  textDecoration: 'line-through'
})

export const anchor = style({
  textDecoration: '#6d6875 wavy underline',
  cursor: 'pointer'
})