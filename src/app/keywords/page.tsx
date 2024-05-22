import Container from "@/components/Container";
import Header from "@/components/Header";
import KeywordPageContent from "@/components/KeywordPageContent";
import PageTitle from "@/components/PageTitle";

import { contentContainer } from "./page.css";

export default function Keywords() {
  return (
    <>
      <Header />
      <PageTitle title="MY KEYWORDS" />
      <Container className={contentContainer}>
        <KeywordPageContent />
      </Container>
    </>
  );
}
