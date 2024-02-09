import { PropsWithChildren } from "react";
import clsx from "clsx";

import {
  extraLargeLabel,
  largeLabel,
  mediumLabel,
  smallLabel,
} from "./index.css";


interface LabelProps {
  size?: "xl" | "l" | "m" | "s";
};

const sizeCss = {
  "xl": extraLargeLabel,
  "l": largeLabel,
  "m": mediumLabel,
  "s": smallLabel
} as const

export default function Label({
  size = "m",
  children,
}: PropsWithChildren<LabelProps>) {
  return (
    <span 
      className={
        clsx(
          sizeCss[size]
        )
      }
    >
      {children}
    </span>
  )
}