"use client";

import Link from "next/link";
import {
  inactiveTab,
  tab,
} from "./index.css"
import Text, { TextProps } from "@/components/Text";
import { usePathname } from "next/navigation";

export type Tab = {
  id: string;
  text: string;
  href: string;
  isParent?: boolean;
}
interface TabProps extends Tab, TextProps {}

const Tab = ({
  text,
  href,
  isParent,
  ...props
}: TabProps) => {
  const pathname = usePathname();
  return (
    <li 
      className={
        isParent
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

export default Tab;