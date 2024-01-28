import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'flex'
})

export const bullet = style({
  paddingRight: '8px',
  fontSize: '18px',
  fontWeight: '300',
  lineHeight: '1.6',
})

export const bodyContainer = style({
  display: 'flex',
  flexDirection: 'column'
})

export const textWrapper = style({
  fontSize: '18px',
  fontWeight: '300',
  lineHeight: '1.6',
})