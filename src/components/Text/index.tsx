import clsx from "clsx";
import { PropsWithChildren } from "react";

import {
  lightWeight,
  mediumText,
  mediumWeight,
  regularWeight,
  smallText,
} from "./index.css";

export interface TextProps {
  size?: "m" | "s";
  weight?: "light" | "regular" | "medium";
  className?: string;
}

const sizeCss = {
  m: mediumText,
  s: smallText,
} as const;
const weightCss = {
  light: lightWeight,
  regular: regularWeight,
  medium: mediumWeight,
} as const;

export default function Text({
  size = "m",
  weight = "regular",
  className,
  children,
}: PropsWithChildren<TextProps>) {
  return (
    <div className={clsx(sizeCss[size], weightCss[weight], className)}>
      {children}
    </div>
  );
}
