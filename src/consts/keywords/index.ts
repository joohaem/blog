import { KEYWORDS as KEYWORDS_CSS } from "./css";

type Keyword = {
  title: string;
  category: string;
  content: React.ReactNode;
};
const KEYWORDS: Keyword[] = [...KEYWORDS_CSS];

export type { Keyword };
export { KEYWORDS };
