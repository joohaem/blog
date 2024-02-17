import { style } from "@vanilla-extract/css";

export const categoryChipsWrapper = style({
  position: "sticky",
  top: "0",

  display: "flex",
  gap: "8px",

  marginTop: "40px",
});

export const articleListContainer = style({
  display: "flex",
  gap: '30px',
  justifyContent: "space-between",

  marginTop: "30px",
});

export const articleInfo = style({
  color: 'rgba(0, 0, 0, 0.5)',
});

export const articleTitle = style({
  marginTop: '8px'
})

export const articleDescription = style({
  marginTop: '8px',

  height: '56px',
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: '3',
  wordBreak: 'break-all',
})

export const thumbnailWrapper = style({
  position: 'relative',
  width: "276px",
  minWidth: '276px',
  height: "123px",

  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
});

export const thumbnailImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
