import { style } from "@vanilla-extract/css";

import { MORE_DESKTOP_MEDIA_QUERY } from "@/consts/mediaQuery";

export const categoryChipsWrapper = style({
  position: "sticky",
  top: "0",

  display: "flex",
  justifyContent: "center",
  gap: "8px",

  marginTop: "40px",

  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      justifyContent: "normal",
    },
  },
});

export const articleListContainer = style({
  display: "flex",
  gap: "30px",
  justifyContent: "space-between",

  marginTop: "30px",
});

export const articleInfo = style({
  color: "rgba(0, 0, 0, 0.5)",
});

export const articleTitle = style({
  marginTop: "4px",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      marginTop: "8px",
    },
  },
});

export const articleDescription = style({
  height: "26px",
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitLineClamp: "3",
  wordBreak: "break-all",

  marginTop: "4px",
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      marginTop: "8px",
      height: "56px",
    },
  },
});

export const thumbnailWrapper = style({
  position: "relative",
  width: "104px",
  minWidth: "104px",
  height: "123px",

  display: "flex",
  justifyContent: "center",
  overflow: "hidden",

  borderRadius: "10px",

  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      width: "276px",
      minWidth: "276px",
      height: "123px",
    },
  },
});

export const thumbnailImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
