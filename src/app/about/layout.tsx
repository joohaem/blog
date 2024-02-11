import Container from "@/components/Container";
import Header from "@/components/Header"
import PageTitle from "@/components/PageTitle"
import { PropsWithChildren } from "react"
import { tabsContainer } from "./layout.css";
import RouteTab, { RouteTab as TRouteTab } from "@/components/RouteTab";

const TABS: TRouteTab[] = [
  {
    id: "all",
    text: "ALL",
    href: "/about",
    exact: true
  },
  {
    id: "life",
    text: "LIFE",
    href: "/about/life",
    exact: true
  },
  {
    id: "engineering",
    text: "ENGINEERING",
    href: "/about/engineering",
    exact: true
  },
  {
    id: "blog",
    text: "BLOG",
    href: "/about/blog",
    exact: true
  },
  {
    id: "contact",
    text: "CONTACT",
    href: "/about/contact",
    exact: true
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
            TABS.map(({ id, text, href, exact }) => (
              <RouteTab
                key={id}
                id={id}
                text={text}
                href={href}
                exact={exact}
                weight="light"
              />
            ))
          }
        </div>
      </Container>
      <Container>    
        {children}
      </Container>
    </>
  )
}

export default Layout