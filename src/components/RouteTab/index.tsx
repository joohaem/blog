"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Label, { LabelProps } from "@/components/Label";

import { inactiveTab, inactiveTabOnBlack, tab, tabOnBlack } from "./index.css";

export type RouteTab = {
  id: string;
  text: string;
  href: string;
  exact?: boolean;
  on?: "black" | "white";
};
interface RouteTabProps extends RouteTab, LabelProps {}

const RouteTab = ({
  text,
  href,
  exact,
  on = "white",
  size = "tab-l",
  ...props
}: RouteTabProps) => {
  const pathname = usePathname();
  const getTabClassName = () => {
    const tabClassName = on === "black" ? tabOnBlack : tab;
    const inactiveTabClassName =
      on === "black" ? inactiveTabOnBlack : inactiveTab;

    if (exact) {
      if (pathname === href) return tabClassName;
      return inactiveTabClassName;
    }
    if (pathname.startsWith(href)) return tabClassName;
    return inactiveTabClassName;
  };
  return (
    <li className={getTabClassName()}>
      <Link href={href}>
        <Label size={size} {...props}>
          {text}
        </Label>
      </Link>
    </li>
  );
};

export default RouteTab;
