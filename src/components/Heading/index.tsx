import clsx from "clsx";
import { PropsWithChildren } from "react";

import {
  extraLightWeight,
  extraSmallTitleHeading,
  largeDisplayHeading,
  lightWeight,
  mediumDisplayHeading,
  mediumTitleHeading,
  mediumWeight,
  regularWeight,
  semiBoldWeight,
  serifFont,
  smallTitleHeading,
} from "./index.css";

interface HeadingProps extends Omit<HeadingTagProps, "className"> {
  size?: "display-l" | "display-m" | "title-m" | "title-s" | "title-xs";
  weight?: "extraLight" | "light" | "regular" | "medium" | "semiBold";
  serif?: boolean;
  className?: string;
}

const sizeCss = {
  "display-l": largeDisplayHeading,
  "display-m": mediumDisplayHeading,
  "title-m": mediumTitleHeading,
  "title-s": smallTitleHeading,
  "title-xs": extraSmallTitleHeading,
} as const;
const weightCss = {
  extraLight: extraLightWeight,
  light: lightWeight,
  regular: regularWeight,
  medium: mediumWeight,
  semiBold: semiBoldWeight,
} as const;

export default function Heading({
  size = "title-m",
  weight = "regular",
  serif = false,
  className,
  ...props
}: HeadingProps) {
  return (
    <HeadingTag
      className={clsx(
        sizeCss[size],
        weightCss[weight],
        serif && serifFont,
        className
      )}
      {...props}
    />
  );
}

interface HeadingTagProps extends PropsWithChildren {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className: string;
}

function HeadingTag({ as = "h2", className, children }: HeadingTagProps) {
  if (as === "h1") return <h1 className={className}>{children}</h1>;
  if (as === "h2") return <h2 className={className}>{children}</h2>;
  if (as === "h3") return <h3 className={className}>{children}</h3>;
  if (as === "h4") return <h4 className={className}>{children}</h4>;
  if (as === "h5") return <h5 className={className}>{children}</h5>;
  if (as === "h6") return <h6 className={className}>{children}</h6>;
  return null;
}
