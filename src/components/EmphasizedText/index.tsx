import { PropsWithChildren } from "react";
import {
  largeEmphasizedText,
  mediumEmphasizedText,
  smallEmphasizedText,
} from "./index.css";

interface EmphasizedTextProps {
  size?: "l" | "m" | "s";
}

const sizeCss = {
  "l": largeEmphasizedText,
  "m": mediumEmphasizedText,
  "s": smallEmphasizedText
}

export default function EmphasizedText({
  size = "m",
  children,
}: PropsWithChildren<EmphasizedTextProps>) {
  return (
    <strong className={sizeCss[size]}>
      {children}
    </strong>
  );
}
