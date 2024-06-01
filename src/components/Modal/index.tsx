"use client";

import clsx from "clsx";
import React, { PropsWithChildren, useEffect } from "react";

import Portal from "@/components/Modal/Portal";

import CloseIcon from "../CloseIcon";
import {
  backdrop,
  mobileCloseIcon,
  mobileModalContainer,
  moreTabletCloseIcon,
  moreTabletModalContainer,
} from "./index.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Modal = ({
  isOpen,
  onClose,
  className,
  children,
}: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    if (!document) return;

    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <Portal>
      <div className={backdrop} onClick={onClose}>
        <div
          className={clsx(className, mobileModalContainer)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CloseIcon
            size={13}
            className={mobileCloseIcon}
            fill="#010101"
            onClick={onClose}
          />
          {children}
        </div>
        <div
          className={clsx(className, moreTabletModalContainer)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CloseIcon
            size={14}
            className={moreTabletCloseIcon}
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
