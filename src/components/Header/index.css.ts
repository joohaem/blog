import { style } from "@vanilla-extract/css";

import {
  LESS_TABLET_MEDIA_QUERY,
  MORE_DESKTOP_MEDIA_QUERY,
} from "@/consts/mediaQuery";

export const headerContainer = style({
  height: "64px",
  overflowY: "hidden",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
});

export const headerLayout = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
});

export const moreDesktopTabsWrapper = style({
  height: "100%",
  alignItems: "center",
  gap: "28px",
  "@media": {
    [LESS_TABLET_MEDIA_QUERY]: {
      display: "none",
    },
    [MORE_DESKTOP_MEDIA_QUERY]: {
      display: "flex",
    },
  },
});

export const lessTabletMenuButton = style({
  "@media": {
    [MORE_DESKTOP_MEDIA_QUERY]: {
      display: "none",
    },
  },
});
