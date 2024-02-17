import { container, pageTitleRoot, title } from "./index.css";
import Container from "@/components/Container";
import Heading from "@/components/Heading";

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title: propTitle }: PageTitleProps) {
  return (
    <div className={pageTitleRoot}>
      <Container className={container}>
        <Heading 
          as="h1"
          size='display-l'
          weight="light"
          serif
          className={title}
        >
          {propTitle}
        </Heading>
      </Container>
    </div>
  );
}
