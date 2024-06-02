import { PropsWithChildren, useEffect } from "react";

interface ScrollBlockProps {
  isBlock: boolean;
}

export default function ScrollBlock({
  isBlock,
  children,
}: PropsWithChildren<ScrollBlockProps>) {
  useEffect(() => {
    if (!document) return;

    if (isBlock) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isBlock]);

  return <>{children}</>;
}
