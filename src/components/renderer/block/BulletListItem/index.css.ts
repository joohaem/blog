import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'flex',
  alignItems: 'center'
})

export const bullet = style({
  paddingRight: '8px',
})

export const bodyContainer = style({
  flex: '1',
  display: 'flex',
  flexDirection: 'column'
})