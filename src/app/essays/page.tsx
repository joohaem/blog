import { format } from "date-fns";
import { Fragment } from "react";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Label from "@/components/Label";
import PageTitle from "@/components/PageTitle";
import Text from "@/components/Text";
import { ESSAYS } from "@/consts/essays";

import {
  content,
  contentContainer,
  date,
  divider,
  sentence,
  sentenceKo,
  title,
} from "./page.css";

export default async function Essays() {
  return (
    <>
      <Header />
      <PageTitle title="ESSAYS" />
      <Container className={contentContainer}>
        <>
          {ESSAYS.map((essay, index) => (
            <div key={essay.id}>
              <Label size="m" className={date}>
                {essay.publishedAt && format(essay.publishedAt, "yyyy.MM.dd")}
              </Label>
              <Heading as="h2" size="title-m" className={title}>
                {"<"}
                {essay.title}
                {">"}
              </Heading>
              <Text size="m" className={content}>
                {essay.contents.map(({ en, ko }) => (
                  <div
                    key={`${en?.slice(0, 5)}-${ko.slice(0, 5)}`}
                    className={sentence}
                  >
                    <p>{en}</p>
                    <p className={sentenceKo}>{ko}</p>
                  </div>
                ))}
              </Text>
              {index < ESSAYS.length - 1 ? <div className={divider} /> : null}
            </div>
          ))}
        </>
      </Container>
    </>
  );
}
