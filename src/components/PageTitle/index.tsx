import { container, pageTitleRoot, title } from "./index.css";
import Conatiner from "../Container";

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title: propTitle }: PageTitleProps) {
  return (
    <div className={pageTitleRoot}>
      <Conatiner className={container}>
        {/* TODO :: change to Typography component */}
        <div className={title}>{propTitle}</div>
      </Conatiner>
    </div>
  );
}
