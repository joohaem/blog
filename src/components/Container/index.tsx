import React, { HTMLAttributes, PropsWithChildren } from "react";
import { containerRoot } from "./index.css";

interface ContainerProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export default function Container({
  children,
  className: propClassName,
}: PropsWithChildren<ContainerProps>) {
  return <div className={`${propClassName} ${containerRoot}`}>{children}</div>;
}
