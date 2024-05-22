import Container from "@/components/Container";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";

import { contentContainer } from "./page.css";
import KeywordPageContent from "@/components/KeywordPageContent";

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
