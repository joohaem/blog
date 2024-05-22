import clsx from "clsx";
import { PropsWithChildren } from "react";

import { largeLabel, largeTabLabel, mediumLabel, serifFont } from "./index.css";

export interface LabelProps {
  size?: "tab-l" | "l" | "m";
  serif?: boolean;
  className?: string;
}

const sizeCss = {
  "tab-l": largeTabLabel,
  l: largeLabel,
  m: mediumLabel,
} as const;

export default function Label({
  size = "m",
  serif = false,
  className,
  children,
}: PropsWithChildren<LabelProps>) {
  return (
    <span className={clsx(sizeCss[size], serif && serifFont, className)}>
      {children}
    </span>
  );
}
