import { PropsWithChildren } from "react";

import Container from "@/components/Container";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import RouteTab, { RouteTab as TRouteTab } from "@/components/RouteTab";

import { tabsContainer } from "./layout.css";

const TABS: TRouteTab[] = [
  {
    id: "all",
    text: "All",
    href: "/about",
    exact: true,
  },
  {
    id: "life",
    text: "Life",
    href: "/about/life",
    exact: true,
  },
  {
    id: "engineering",
    text: "Engineering",
    href: "/about/engineering",
    exact: true,
  },
  {
    id: "blog",
    text: "Blog",
    href: "/about/blog",
    exact: true,
  },
  {
    id: "contact",
    text: "Contact",
    href: "/about/contact",
    exact: true,
  },
];

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <PageTitle title="ABOUT" />
      <Container>
        <div className={tabsContainer}>
          {TABS.map(({ id, text, href, exact }) => (
            <RouteTab key={id} id={id} text={text} href={href} exact={exact} />
          ))}
        </div>
      </Container>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
