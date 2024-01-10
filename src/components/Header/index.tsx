"use client";

import Link from "next/link";
import EmphasizedText from "../EmphasizedText";
import Heading from "../Heading";
import {
  headerContainer,
  headerLayout,
  inactiveTab,
  tab,
  tabsWrapper,
} from "./index.css";
import { usePathname } from "next/navigation";

const TABS = [
  {
    id: "about",
    text: "About",
    href: "/about",
  },
  {
    id: "keyword",
    text: "My Keywords",
    href: "/keywords",
  },
  {
    id: "article",
    text: "Articles",
    href: "/articles",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={headerContainer}>
      <div className={headerLayout}>
        <Link href="/">
          <EmphasizedText size="s">SNUPI</EmphasizedText>
        </Link>
        <ul className={tabsWrapper}>
          {TABS.map(({ id, text, href }) => (
            <li className={pathname === href ? tab : inactiveTab} key={id}>
              <Link href={href}>
                <Heading size="title-s">{text}</Heading>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
