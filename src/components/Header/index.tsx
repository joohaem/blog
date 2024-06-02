import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import RouteTab, { RouteTab as TRouteTab } from "@/components/RouteTab";

import Menu from "./components/Menu";
import {
  headerContainer,
  headerLayout,
  lessTabletMenuButton,
  moreDesktopTabsWrapper,
} from "./index.css";

const TABS: TRouteTab[] = [
  {
    id: "about",
    text: "ABOUT",
    href: "/about",
  },
  {
    id: "keyword",
    text: "KEYWORDS",
    href: "/keywords",
  },
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
            <Image src="/logo.svg" alt="logo" width={68} height={30} />
          </Link>
          <div className={lessTabletMenuButton}>
            <Menu items={TABS} />
          </div>
          <ul className={moreDesktopTabsWrapper}>
            {TABS.map(({ id, text, href, exact }) => (
              <RouteTab
                key={id}
                id={id}
                text={text}
                href={href}
                exact={exact}
              />
            ))}
          </ul>
        </div>
      </header>
    </Container>
  );
}
