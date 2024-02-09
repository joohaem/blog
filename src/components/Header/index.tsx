"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import EmphasizedText from "@/components/EmphasizedText";
import Text from "@/components/Text";
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
    text: "ABOUT",
    href: "/about", // TODO :: contains "/"
  },
  // {
  //   id: "keyword",
  //   text: "My Keywords",
  //   href: "/keywords",
  // },
  {
    id: "article",
    text: "ARTICLES",
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
              <li className={pathname === href ? tab : inactiveTab} key={id}>
                <Link href={href}>
                  <Text size="m" weight='medium'>{text}</Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </Container>
  );
}
