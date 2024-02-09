import { PropsWithChildren } from "react";
import clsx from "clsx";

import {
  largeText,
  regularWeight,
  mediumText,
  mediumWeight,
  smallText,
} from "./index.css";


interface TextProps {
  size?: "l" | "m" | "s";
  weight?: 'regular' | 'medium';
  className?: string;
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

export default function Text({
  size = "m",
  weight = 'regular',
  className,
  children
}: PropsWithChildren<TextProps>) {
  return (
    <p 
      className={
        clsx(
          sizeCss[size],
          weightCss[weight],
          className
        )
      }
    >
      {children}
    </p>
  )
}
