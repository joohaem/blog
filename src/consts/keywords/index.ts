import { KEYWORDS as KEYWORDS_CSS } from "./css";

type Keyword = {
  title: string;
  category: string;
  content: React.ReactNode;
  pathUrl: string;
};
const KEYWORDS: Keyword[] = [...KEYWORDS_CSS];

export type { Keyword };
export { KEYWORDS };
