import Container from "@/components/Container";
import Heading from "@/components/Heading";

import { container, pageTitleRoot, title } from "./index.css";

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title: propTitle }: PageTitleProps) {
  return (
    <div className={pageTitleRoot}>
      <Container className={container}>
        <Heading
          as="h1"
          size="display-l"
          weight="extraLight"
          serif
          className={title}
        >
          {propTitle}
        </Heading>
      </Container>
    </div>
  );
}
