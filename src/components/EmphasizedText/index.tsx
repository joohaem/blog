import { PropsWithChildren } from "react";
import {
  largeEmphasizedText,
  mediumEmphasizedText,
  smallEmphasizedText,
} from "./index.css";
import clsx from "clsx";

interface EmphasizedTextProps {
  size?: "l" | "m" | "s";
  className?: string;
}

const sizeCss = {
  "l": largeEmphasizedText,
  "m": mediumEmphasizedText,
  "s": smallEmphasizedText
}

export default function EmphasizedText({
  size = "m",
  className,
  children,
}: PropsWithChildren<EmphasizedTextProps>) {
  return (
    <strong 
      className={
        clsx(
          sizeCss[size],
          className
        )
      }
    >
      {children}
    </strong>
  );
}
