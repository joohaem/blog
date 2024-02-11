"use client";

import Link from "next/link";
import {
  inactiveTab,
  tab,
} from "./index.css"
import Text, { TextProps } from "@/components/Text";
import { usePathname } from "next/navigation";

export type RouteTab = {
  id: string;
  text: string;
  href: string;
  exact?: boolean;
}
interface RouteTabProps extends RouteTab, TextProps {}

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
        <Text size="m" weight='medium' {...props}>{text}</Text>
      </Link>
    </li>
  )
}

export default RouteTab;