import Link from "next/link";
import Container from "@/components/Container";
import EmphasizedText from "@/components/EmphasizedText";
import Tab, { Tab as TTab } from "@/components/Tab";

import {
  headerContainer,
  headerLayout,
  tabsWrapper,
} from "./index.css";

const TABS: TTab[] = [
  {
    id: "about",
    text: "ABOUT",
    href: "/about",
    isParent: true
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
  return (
    <Container>
      <header className={headerContainer}>
        <div className={headerLayout}>
          <Link href="/">
            <EmphasizedText size="s">SNUPI</EmphasizedText>
          </Link>
          <ul className={tabsWrapper}>
            {TABS.map(({ id, text, href, isParent }) => (
              <Tab
                key={id}
                id={id}
                text={text}
                href={href}
                isParent={isParent}
              />
            ))}
          </ul>
        </div>
      </header>
    </Container>
  );
}
