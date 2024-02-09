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
  className?: string;
};

const sizeCss = {
  "xl": extraLargeLabel,
  "l": largeLabel,
  "m": mediumLabel,
  "s": smallLabel
} as const

export default function Label({
  size = "m",
  className,
  children,
}: PropsWithChildren<LabelProps>) {
  return (
    <span 
      className={
        clsx(
          sizeCss[size],
          className
        )
      }
    >
      {children}
    </span>
  )
}