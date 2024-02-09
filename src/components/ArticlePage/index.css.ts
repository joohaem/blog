import { style } from "@vanilla-extract/css";

export const backLink = style({
  display: "flex",
  gap: "8px",
  padding: "24px 8px",
});

export const label = style({
  color: "gray"
});

export const imageWrapper = style({
  position: "relative",
  width: "100%",
  height: "400px",

  overflow: "clip",
});

export const categories = style({
  display: "flex",
  marginTop: "32px",
  "@media": {
    "screen and (min-width: 480px)": {
      marginTop: '20px'
    }
  }
});

export const categoryChip = style({
  borderRadius: "13px",
  padding: "6px 12px",
  backgroundColor: "#FFC8DC"
});

export const title = style({
  marginTop: '40px',
  "@media": {
    "screen and (min-width: 480px)": {
      marginTop: '20px',
    }
  }
})

export const date = style({
  margin: '16px 0 40px',
  color: "#343a40",
  "@media": {
    "screen and (min-width: 480px)": {
      margin: '16px 0 20px',
    }
  }
})

export const bodyContainer = style({})