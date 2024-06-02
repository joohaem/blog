"use client";

import { useState } from "react";

import CloseIcon from "@/components/CloseIcon";
import MenuIcon from "@/components/MenuIcon";
import Portal from "@/components/Modal/Portal";
import RouteTab, { RouteTab as TRouteTab } from "@/components/RouteTab";
import ScrollBlock from "@/components/ScrollBlock";

import {
  backdropContainer,
  closeIcon,
  menu,
  routeTabLabelWrapper,
} from "./index.css";

interface MenuProps {
  items: TRouteTab[];
}

export default function Menu({ items }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuIcon
        size={30}
        onClick={() => {
          setIsOpen(true);
        }}
        className={menu}
      />
      {isOpen && (
        <ScrollBlock isBlock={isOpen}>
          <Portal>
            <div
              className={backdropContainer}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <CloseIcon
                size={25}
                fill="white"
                className={closeIcon}
                onClick={() => {
                  setIsOpen(false);
                }}
              />
              <ul
                className={routeTabLabelWrapper}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {items.map(({ id, text, href, exact }) => (
                  <RouteTab
                    key={id}
                    id={id}
                    text={text}
                    href={href}
                    exact={exact}
                    on="black"
                    serif
                    size="tab-xl"
                  />
                ))}
              </ul>
            </div>
          </Portal>
        </ScrollBlock>
      )}
    </>
  );
}
