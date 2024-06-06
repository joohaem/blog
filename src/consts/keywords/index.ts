import { KEYWORDS as KEYWORDS_CSS } from "./css";
import { KEYWORDS as KEYWORDS_GRAPHQL } from "./graphql";
import { KEYWORDS as KEYWORDS_HTML } from "./html";
import { KEYWORDS as KEYWORDS_JAVASCRIPT } from "./javaScript";
import { KEYWORDS as KEYWORDS_REACT } from "./react";
import { KEYWORDS as KEYWORDS_TYPESCRIPT } from "./typeScript";
import { KEYWORDS as KEYWORDS_WEB } from "./web";

type KeywordCategory =
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "GraphQL"
  | "HTML"
  | "Web";
type Keyword = {
  title: string;
  category: KeywordCategory;
  content: React.ReactNode;
  pathUrl: string;
  date: Date;
};
const KEYWORDS: Keyword[] = [
  ...KEYWORDS_CSS,
  ...KEYWORDS_JAVASCRIPT,
  ...KEYWORDS_TYPESCRIPT,
  ...KEYWORDS_REACT,
  ...KEYWORDS_GRAPHQL,
  ...KEYWORDS_HTML,
  ...KEYWORDS_WEB,
].sort((a, b) => b.date.getTime() - a.date.getTime());

export type { Keyword };
export { KEYWORDS };
