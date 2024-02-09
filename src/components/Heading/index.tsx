import { PropsWithChildren } from "react";
import clsx from "clsx";

import {
  largeDisplayHeading,
  largeTitleHeading,
  lightWeight,
  mediumTitleHeading,
  mediumWeight,
  smallTitleHeading,
} from "./index.css";


interface HeadingProps extends Omit<HeadingTagProps, 'className'> {
  size?: "display-l" | "title-l" | "title-m" | "title-s";
  weight?: 'light' | 'medium';
};

const sizeCss = {
  "display-l": largeDisplayHeading,
  "title-l": largeTitleHeading,
  "title-m": mediumTitleHeading,
  "title-s": smallTitleHeading
} as const
const weightCss = {
  "light": lightWeight,
  "medium": mediumWeight 
} as const

export default function Heading({
  size = "title-m",
  weight = 'medium',
  ...props
}: HeadingProps) {
  return (
    <HeadingTag 
      className={
        clsx(
          sizeCss[size],
          weightCss[weight]
        )
      }
      {...props}
    />
  )
}

interface HeadingTagProps extends PropsWithChildren {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className: string;
}

function HeadingTag({
  as = 'h2',
  className,
  children
}: HeadingTagProps) {
  if(as === 'h1') return (
    <h1 className={className}>{children}</h1>
  )
  if(as === 'h2') return (
    <h2 className={className}>{children}</h2>
  )
  if(as === 'h3') return (
    <h3 className={className}>{children}</h3>
  )
  if(as === 'h4') return (
    <h4 className={className}>{children}</h4>
  )
  if(as === 'h5') return (
    <h5 className={className}>{children}</h5>
  )
  if(as === 'h6') return (
    <h6 className={className}>{children}</h6>
  )
  return null;
}