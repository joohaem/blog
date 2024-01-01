import { PropsWithChildren } from "react";
import {
  largeTitleHeading,
  midiumTitleHeading,
  smallTitleHeading,
} from "./index.css";

interface HeadingProps {
  size?: "title-l" | "title-m" | "title-s";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Heading({
  size = "title-m",
  children,
}: PropsWithChildren<HeadingProps>) {
  if (size === "title-l") {
    return <div className={largeTitleHeading}>{children}</div>;
  }
  if (size === "title-m") {
    return <div className={midiumTitleHeading}>{children}</div>;
  }
  if (size === "title-s") {
    return <div className={smallTitleHeading}>{children}</div>;
  }
  throw new Error("Heading :: size not found");
}
