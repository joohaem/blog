import { Keyword, KEYWORDS } from "@/consts/keywords";

import KeywordContentBox from "./components/KeywordContentBox";
import {
  bigDesktopKeywordsWrapper,
  desktopKeywordsWrapper,
  mobileKeywordsWrapper,
  oneLineOfFourLinesContainer,
  oneLineOfThreeLinesContainer,
  oneLineOfTwoLinesContainer,
  tabletKeywordsWrapper,
} from "./index.css";

// TODO :: Seperate
const keywords: Keyword[] = [];
const keywordGroupByTwoLines: Record<"first" | "second", Keyword[]> = {
  first: [],
  second: [],
};
const keywordGroupByThreeLines: Record<
  "first" | "second" | "third",
  Keyword[]
> = {
  first: [],
  second: [],
  third: [],
};
const keywordGroupByFourLines: Record<
  "first" | "second" | "third" | "forth",
  Keyword[]
> = {
  first: [],
  second: [],
  third: [],
  forth: [],
};
KEYWORDS.forEach((keyword, i) => {
  keywords.push(keyword);

  if (i % 2 === 0) {
    keywordGroupByTwoLines.first.push(keyword);
  } else if (i % 2 === 1) {
    keywordGroupByTwoLines.second.push(keyword);
  }

  if (i % 3 === 0) {
    keywordGroupByThreeLines.first.push(keyword);
  } else if (i % 3 === 1) {
    keywordGroupByThreeLines.second.push(keyword);
  } else if (i % 3 === 2) {
    keywordGroupByThreeLines.third.push(keyword);
  }

  if (i % 4 === 0) {
    keywordGroupByFourLines.first.push(keyword);
  } else if (i % 4 === 1) {
    keywordGroupByFourLines.second.push(keyword);
  } else if (i % 4 === 2) {
    keywordGroupByFourLines.third.push(keyword);
  } else if (i % 4 === 3) {
    keywordGroupByFourLines.forth.push(keyword);
  }
});

export default function KeywordsPageContent() {
  return (
    <>
      <div className={mobileKeywordsWrapper}>
        {keywords.map((keyword) => (
          <KeywordContentBox
            key={`${keyword.category}-${keyword.title}`}
            {...keyword}
          />
        ))}
      </div>

      <div className={tabletKeywordsWrapper}>
        <div className={oneLineOfTwoLinesContainer}>
          {keywordGroupByTwoLines.first.map((keyword) => (
            <KeywordContentBox
              key={`${keyword.category}-${keyword.title}`}
              {...keyword}
            />
          ))}
        </div>
        <div className={oneLineOfTwoLinesContainer}>
          {keywordGroupByTwoLines.second.map((keyword) => (
            <KeywordContentBox
              key={`${keyword.category}-${keyword.title}`}
              {...keyword}
            />
          ))}
        </div>
      </div>

      <div className={desktopKeywordsWrapper}>
        <div className={oneLineOfThreeLinesContainer}>
          {keywordGroupByThreeLines.first.map((keyword) => (
            <KeywordContentBox
              key={`${keyword.category}-${keyword.title}`}
              {...keyword}
            />
          ))}
        </div>
        <div className={oneLineOfThreeLinesContainer}>
          {keywordGroupByThreeLines.second.map((keyword) => (
            <KeywordContentBox
              key={`${keyword.category}-${keyword.title}`}
              {...keyword}
            />
          ))}
        </div>
        <div className={oneLineOfThreeLinesContainer}>
          {keywordGroupByThreeLines.third.map((keyword) => (
            <KeywordContentBox
              key={`${keyword.category}-${keyword.title}`}
              {...keyword}
            />
          ))}
        </div>
      </div>

      <div className={bigDesktopKeywordsWrapper}>
        <div className={oneLineOfFourLinesContainer}>
          {keywordGroupByFourLines.first.map((keyword) => (
            <KeywordContentBox
              key={`${keyword.category}-${keyword.title}`}
              {...keyword}
            />
          ))}
        </div>
        <div className={oneLineOfFourLinesContainer}>
          {keywordGroupByFourLines.second.map((keyword) => (
            <KeywordContentBox
              key={`${keyword.category}-${keyword.title}`}
              {...keyword}
            />
          ))}
        </div>
        <div className={oneLineOfFourLinesContainer}>
          {keywordGroupByFourLines.third.map((keyword) => (
            <KeywordContentBox
              key={`${keyword.category}-${keyword.title}`}
              {...keyword}
            />
          ))}
        </div>
        <div className={oneLineOfFourLinesContainer}>
          {keywordGroupByFourLines.forth.map((keyword) => (
            <KeywordContentBox
              key={`${keyword.category}-${keyword.title}`}
              {...keyword}
            />
          ))}
        </div>
      </div>
    </>
  );
}
