import Image from "next/image";
import { format } from "date-fns";

import { getArticleById } from "@/core/blog";
import Label from "@/components/Label";
import Heading from "@/components/Heading";
import Container from "@/components/Container";
import { BlockRenderer } from "@/components/renderer/BlockRenderer";

import {
  bodyContainer,
  articleInfo,
  thumbnailImageWrapper,
  thumbnailImage,
  articleTitle,
  dimmedFilter,
  titleContainer,
} from "./index.css";

interface ArticlePageProps {
  params: {
    id: string;
  };
}

async function ArticlePage({ params }: ArticlePageProps) {
  const id = params.id;
  const article = await getArticleById(id);

  return (
    <>
      {article.thumbnail ? (
        <div className={thumbnailImageWrapper}>
          <Image
            src={article.thumbnail.url}
            alt="Thumbnail Image"
            fill
            className={thumbnailImage}
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
