import { container, pageTitleRoot, title } from "./index.css";
import Container from "../Container";

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title: propTitle }: PageTitleProps) {
  return (
    <div className={pageTitleRoot}>
      <Container className={container}>
        {/* TODO :: change to Typography component */}
        <div className={title}>{propTitle}</div>
      </Container>
    </div>
  );
}
