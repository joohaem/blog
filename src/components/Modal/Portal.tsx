import { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: PropsWithChildren) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let modalRoot = document.getElementById("portal-root");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.setAttribute("id", "portal-root");
      document.body.appendChild(modalRoot);
    }
    setElement(modalRoot);
  }, []);

  if (!element) {
    return null;
  }

  return createPortal(children, element);
};

export default Portal;
