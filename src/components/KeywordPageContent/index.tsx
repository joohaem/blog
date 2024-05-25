import Heading from "@/components/Heading";
import { Keyword, KEYWORDS } from "@/consts/keywords";

import Label from "../Label";
import {
  bigDesktopKeywordsWrapper,
  contentCategory,
  contentItem,
  desktopKeywordsWrapper,
  mobileKeywordsWrapper,
  oneLineOfFourLinesContainer,
  oneLineOfThreeLinesContainer,
  oneLineOfTwoLinesContainer,
  tabletKeywordsWrapper,
} from "./index.css";

const keywords = [
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
  ...KEYWORDS,
];

// TODO :: Seperate
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
keywords.forEach((keyword, i) => {
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

// TODO :: KeywordContentBox component
export default function KeywordPageContent() {
  return (
    <>
      <div className={mobileKeywordsWrapper}>
        {keywords.map(({ title, category }) => (
          <div key={`${category}-${title}`} className={contentItem}>
            <Heading size="title-xs" weight="medium">
              {title}
            </Heading>
            <Label size="m" className={contentCategory}>
              {category}
            </Label>
          </div>
        ))}
      </div>

      <div className={tabletKeywordsWrapper}>
        <div className={oneLineOfTwoLinesContainer}>
          {keywordGroupByTwoLines.first.map(({ title, category }) => (
            <div key={`${category}-${title}`} className={contentItem}>
              <Heading size="title-xs" weight="medium">
                {title}
              </Heading>
              <Label size="m" className={contentCategory}>
                {category}
              </Label>
            </div>
          ))}
        </div>
        <div className={oneLineOfTwoLinesContainer}>
          {keywordGroupByTwoLines.second.map(({ title, category }) => (
            <div key={`${category}-${title}`} className={contentItem}>
              <Heading size="title-xs" weight="medium">
                {title}
              </Heading>
              <Label size="m" className={contentCategory}>
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className={desktopKeywordsWrapper}>
        <div className={oneLineOfThreeLinesContainer}>
          {keywordGroupByThreeLines.first.map(({ title, category }) => (
            <div key={`${category}-${title}`} className={contentItem}>
              <Heading size="title-xs" weight="medium">
                {title}
              </Heading>
              <Label size="m" className={contentCategory}>
                {category}
              </Label>
            </div>
          ))}
        </div>
        <div className={oneLineOfThreeLinesContainer}>
          {keywordGroupByThreeLines.second.map(({ title, category }) => (
            <div key={`${category}-${title}`} className={contentItem}>
              <Heading size="title-xs" weight="medium">
                {title}
              </Heading>
              <Label size="m" className={contentCategory}>
                {category}
              </Label>
            </div>
          ))}
        </div>
        <div className={oneLineOfThreeLinesContainer}>
          {keywordGroupByThreeLines.third.map(({ title, category }) => (
            <div key={`${category}-${title}`} className={contentItem}>
              <Heading size="title-xs" weight="medium">
                {title}
              </Heading>
              <Label size="m" className={contentCategory}>
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className={bigDesktopKeywordsWrapper}>
        <div className={oneLineOfFourLinesContainer}>
          {keywordGroupByFourLines.first.map(({ title, category }) => (
            <div key={`${category}-${title}`} className={contentItem}>
              <Heading size="title-xs" weight="medium">
                {title}
              </Heading>
              <Label size="m" className={contentCategory}>
                {category}
              </Label>
            </div>
          ))}
        </div>
        <div className={oneLineOfFourLinesContainer}>
          {keywordGroupByFourLines.second.map(({ title, category }) => (
            <div key={`${category}-${title}`} className={contentItem}>
              <Heading size="title-xs" weight="medium">
                {title}
              </Heading>
              <Label size="m" className={contentCategory}>
                {category}
              </Label>
            </div>
          ))}
        </div>
        <div className={oneLineOfFourLinesContainer}>
          {keywordGroupByFourLines.third.map(({ title, category }) => (
            <div key={`${category}-${title}`} className={contentItem}>
              <Heading size="title-xs" weight="medium">
                {title}
              </Heading>
              <Label size="m" className={contentCategory}>
                {category}
              </Label>
            </div>
          ))}
        </div>
        <div className={oneLineOfFourLinesContainer}>
          {keywordGroupByFourLines.forth.map(({ title, category }) => (
            <div key={`${category}-${title}`} className={contentItem}>
              <Heading size="title-xs" weight="medium">
                {title}
              </Heading>
              <Label size="m" className={contentCategory}>
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
