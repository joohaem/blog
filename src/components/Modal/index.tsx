"use client";

import clsx from "clsx";
import React, { PropsWithChildren } from "react";

import CloseIcon from "@/components/CloseIcon";
import ScrollBlock from "@/components/ScrollBlock";

import {
  backdrop,
  mobileCloseIcon,
  mobileModalContainer,
  moreTabletCloseIcon,
  moreTabletModalContainer,
} from "./index.css";
import Portal from "./Portal";

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
  if (!isOpen) return null;
  return (
    <ScrollBlock isBlock={isOpen}>
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
              fill="white"
              onClick={onClose}
            />
            {children}
          </div>
        </div>
      </Portal>
    </ScrollBlock>
  );
};

export default Modal;
