import { PropsWithChildren } from "react";
import {
  largeEmphasizedText,
  midiumEmphasizedText,
  smallEmphasizedText,
} from "./index.css";

interface EmphasizedTextProps {
  size?: "l" | "m" | "s";
}

export default function EmphasizedText({
  size = "m",
  children,
}: PropsWithChildren<EmphasizedTextProps>) {
  if (size === "l") {
    return <strong className={largeEmphasizedText}>{children}</strong>;
  }
  if (size === "m") {
    return <strong className={midiumEmphasizedText}>{children}</strong>;
  }
  if (size === "s") {
    return <strong className={smallEmphasizedText}>{children}</strong>;
  }
  throw new Error("EmphasizedText :: size not found");
}
