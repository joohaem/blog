import { style } from "@vanilla-extract/css";

export const backLink = style({
  display: "flex",
  gap: "8px",
  padding: "24px 8px",
});

export const label = style({
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "1.25",
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
  lineHeight: "1.2",
  backgroundColor: "#FFC8DC"
});

export const title = style({
  marginTop: '12px',
  fontSize: '40px',
  fontWeight: '600',
  lineHeight: '130%',
  "@media": {
    "screen and (min-width: 480px)": {
      fontSize: '28px'
    }
  }
})

export const date = style({
  marginTop: '8px',
  fontSize: '14px',
  fontWeight: '300',
  color: "#343a40",
})

export const bodyContainer = style({
  marginTop: '80px',
  "@media": {
    "screen and (min-width: 480px)": {
      marginTop: '40px'
    }
  }
})