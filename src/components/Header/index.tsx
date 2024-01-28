"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import EmphasizedText from "@/components/EmphasizedText";
import Heading from "@/components/Heading";
import {
  headerContainer,
  headerLayout,
  inactiveTab,
  tab,
  tabsWrapper,
} from "./index.css";

const TABS = [
  {
    id: "about",
    text: "About",
    href: "/about", // TODO :: contains "/"
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
    <Container>
      <header className={headerContainer}>
        <div className={headerLayout}>
          <Link href="/">
            <EmphasizedText size="s">SNUPI</EmphasizedText>
          </Link>
          <ul className={tabsWrapper}>
            {TABS.map(({ id, text, href }) => (
              // TODO :: color change with Heading props
              <li className={pathname === href ? tab : inactiveTab} key={id}>
                <Link href={href}>
                  <Heading size="title-s">{text}</Heading>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </Container>
  );
}
