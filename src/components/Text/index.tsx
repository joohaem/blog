import { PropsWithChildren } from "react";
import clsx from "clsx";

import {
  largeText,
  regularWeight,
  mediumText,
  mediumWeight,
  smallText,
  lightWeight,
} from "./index.css";


export interface TextProps {
  size?: "l" | "m" | "s";
  weight?: 'light' | 'regular' | 'medium';
  className?: string;
};

const sizeCss = {
  "l": largeText,
  "m": mediumText,
  "s": smallText
} as const
const weightCss = {
  "light": lightWeight,
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
