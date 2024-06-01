import { KEYWORDS as KEYWORDS_CSS } from "./css";
import { KEYWORDS as KEYWORDS_JAVASCRIPT } from "./javaScript";

type KeywordCategory = "CSS" | "JavaScript";
type Keyword = {
  title: string;
  category: KeywordCategory;
  content: React.ReactNode;
  pathUrl: string;
  date: Date;
};
const KEYWORDS: Keyword[] = [...KEYWORDS_CSS, ...KEYWORDS_JAVASCRIPT].sort(
  (a, b) => b.date.getTime() - a.date.getTime()
);

export type { Keyword };
export { KEYWORDS };
