import React, { HTMLAttributes, PropsWithChildren } from "react";
import { containerRoot } from "./index.css";

interface ConatinerProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export default function Conatiner({
  children,
  className: propClassName,
}: PropsWithChildren<ConatinerProps>) {
  return <div className={`${propClassName} ${containerRoot}`}>{children}</div>;
}
