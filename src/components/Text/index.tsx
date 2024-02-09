import { PropsWithChildren } from "react";
import clsx from "clsx";

import {
  largeText,
  regularWeight,
  mediumText,
  mediumWeight,
  smallText,
} from "./index.css";


interface HeadingProps {
  size?: "l" | "m" | "s";
  weight?: 'regular' | 'medium';
};

const sizeCss = {
  "l": largeText,
  "m": mediumText,
  "s": smallText
} as const
const weightCss = {
  "regular": regularWeight,
  "medium": mediumWeight 
} as const

export default function Heading({
  size = "m",
  weight = 'regular',
  children
}: PropsWithChildren<HeadingProps>) {
  return (
    <p 
      className={
        clsx(
          sizeCss[size],
          weightCss[weight]
        )
      }
    >
      {children}
    </p>
  )
}
