import { style } from "@vanilla-extract/css";

export const categoryChipsWrapper = style({
  position: "sticky",
  top: "0",

  display: "flex",
  gap: "8px",

  padding: "40px 0 0",
});

export const articleListContainer = style({
  display: "flex",
  gap: '30px',
  justifyContent: "space-between",
  padding: "40px 0 0",
});

export const articleInfo = style({
  color: '#6c757d',
});

export const articleDescription = style({
  marginTop: '16px',

  height: '72px',
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: '3',
  wordBreak: 'break-all',
})

export const thumbnailWrapper = style({
  position: 'relative',
  width: "140px",
  minWidth: '140px',
  height: "140px",

  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
});

export const thumbnailImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
