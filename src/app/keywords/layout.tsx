import Container from "@/components/Container";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";

import KeywordsPageContent from "./components/KeywordsPageContent";
import { contentContainer } from "./layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <PageTitle title="MY KEYWORDS" />
      <Container className={contentContainer}>
        <KeywordsPageContent />
      </Container>
      {children}
    </>
  );
}
