import { format } from "date-fns";
import Image from "next/image";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Label from "@/components/Label";
import { BlockRenderer } from "@/components/renderer/BlockRenderer";
import { getArticleByUrlPath } from "@/core/blog";

import {
  articleInfo,
  articleTitle,
  bodyContainer,
  dimmedFilter,
  thumbnailImage,
  thumbnailImageWrapper,
  titleContainer,
} from "./index.css";

interface ArticlePageProps {
  params: {
    path: string;
  };
}

// TOOD:: Refactor to page components
async function ArticlePage({ params }: ArticlePageProps) {
  const urlPath = params.path;
  const article = await getArticleByUrlPath(urlPath);

  return (
    <>
      {article.thumbnail ? (
        <div className={thumbnailImageWrapper}>
          <Image
            src={article.thumbnail.url}
            alt="Thumbnail Image"
            fill
            className={thumbnailImage}
            priority
          />
          <div className={dimmedFilter}>
            <Container className={titleContainer}>
              <Label size="l" serif className={articleInfo}>
                {article.category} |{" "}
                {article.publishedAt &&
                  format(article.publishedAt, "yyyy.MM.dd")}
              </Label>
              <Heading as="h1" size="display-m" serif className={articleTitle}>
                {article.title}
              </Heading>
            </Container>
          </div>
        </div>
      ) : null}
      <Container className={bodyContainer}>
        <BlockRenderer blocks={article.blocks} />
      </Container>
    </>
  );
}

export default ArticlePage;
