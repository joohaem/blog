import Link from "next/link";
import EmphasizedText from "../EmphasizedText";
import Heading from "../Heading";
import { header, leftWrapper, tab, tabsWrapper } from "./index.css";

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
  return (
    <header className={header}>
      <div className={leftWrapper}>
        <Link href="/">
          <EmphasizedText size="s">SNUPI</EmphasizedText>
        </Link>
        <ul className={tabsWrapper}>
          {TABS.map(({ id, text, href }) => (
            <li className={tab} key={id}>
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
