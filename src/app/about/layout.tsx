import Container from "@/components/Container";
import Header from "@/components/Header"
import PageTitle from "@/components/PageTitle"
import { PropsWithChildren } from "react"
import { contentsContainer, tabsContainer } from "./layout.css";
import Tab, { Tab as TTab } from "@/components/Tab";

const TABS: TTab[] = [
  {
    id: "all",
    text: "ALL",
    href: "/about",
    isParent: true
  },
  {
    id: "life",
    text: "LIFE",
    href: "/about/life",
  },
  {
    id: "engineering",
    text: "ENGINEERING",
    href: "/about/engineering",
  },
  {
    id: "blog",
    text: "BLOG",
    href: "/about/blog",
  },
  {
    id: "contact",
    text: "CONTACT",
    href: "/about/contact",
  },
];

const Layout = ({children}: PropsWithChildren) => {
  return (
    <>
      <Header />
      <PageTitle title="ABOUT" />
      <Container>
        <div className={tabsContainer}>
          {
            TABS.map(({ id, text, href, isParent }) => (
              <Tab
                key={id}
                id={id}
                text={text}
                href={href}
                isParent={isParent}
                weight="light"
              />
            ))
          }
        </div>
      </Container>
      <Container className={contentsContainer}>    
        {children}
      </Container>
    </>
  )
}

export default Layout