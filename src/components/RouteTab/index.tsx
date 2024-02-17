"use client";

import Link from "next/link";
import {
  inactiveTab,
  tab,
} from "./index.css"
import { usePathname } from "next/navigation";
import Label, { LabelProps } from "@/components/Label";

export type RouteTab = {
  id: string;
  text: string;
  href: string;
  exact?: boolean;
}
interface RouteTabProps extends RouteTab, LabelProps {}

const RouteTab = ({
  text,
  href,
  exact,
  ...props
}: RouteTabProps) => {
  const pathname = usePathname();
  return (
    <li 
      className={
        exact
        ? pathname === href ? tab : inactiveTab
        : pathname.startsWith(href) ? tab : inactiveTab
      }
    >
      <Link href={href}>
        <Label size="tab-l" {...props}>{text}</Label>
      </Link>
    </li>
  )
}

export default RouteTab;