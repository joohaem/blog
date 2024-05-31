"use client";

import React, { PropsWithChildren, useEffect } from "react";

import Portal from "@/components/Modal/Portal";

import {
  backdrop,
  mobileModalContainer,
  moreTabletModalContainer,
} from "./index.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    if (!document) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <Portal>
      <div className={backdrop} onClick={onClose}>
        <div className={mobileModalContainer}>{children}</div>
        <div className={moreTabletModalContainer}>{children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
