import Container from "@/components/Container";
import Header from "@/components/Header";
import KeywordsPageContent from "@/components/KeywordsPageContent";
import PageTitle from "@/components/PageTitle";

import { contentContainer } from "./layout.css";

// TODO :: Refactor Page component
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
