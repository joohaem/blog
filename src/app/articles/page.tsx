import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { decode, encode } from "js-base64";

import { getArticles } from "@/core/blog";
import Header from "@/components/Header";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import Chip from "@/components/Chip";
import Heading from "@/components/Heading";

import {
  articleDescription,
  articleInfo,
  articleListContainer,
  articleTitle,
  categoryChipsWrapper,
  thumbnailImage,
  thumbnailWrapper,
} from "./page.css";
import Text from "@/components/Text";
import Label from "@/components/Label";

export async function generateStaticParams() {
  const articles = await getArticles();

  const params = articles
    .map((article) => article.category)
    .filter((category): category is string => !!category)
    .map((category) => ({ category: encode(category) }));

  return params;
}

interface ArticlesProps {
  // TODO :: typing
  params?: { category?: string };
}

export default async function Articles({ params }: ArticlesProps) {
  const currentCategory =
    params?.category && decode(decodeURIComponent(params.category));

  const articles = (await getArticles())
    .filter(({ isPublished }) => isPublished)
    .sort((a, b) =>
      b.publishedAt && a.publishedAt
        ? b.publishedAt.getTime() - a.publishedAt.getTime()
        : 0
    );
  // const categories = articles
  //   .map((article) => article.category)
  //   .filter((category): category is string => !!category);
  // const filteredArticles = articles.filter(
  //   (article) => !currentCategory || article.category === currentCategory
  // );

  return (
    <>
      <Header />
      <PageTitle title="ARTICLES" />
      <Container>
        <div className={categoryChipsWrapper}>
          <Link href="/articles">
            <Chip active={!currentCategory}>All</Chip>
          </Link>
          {/* {categories.map((category) => (
            <Link key={category} href={`/category/${encode(category)}`}>
              <Chip active={category === currentCategory}>{category}</Chip>
            </Link>
          ))} */}
        </div>
        <div>
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.urlPath}`}
              className={articleListContainer}
            >
              <div>
                <Label size="m" className={articleInfo}>
                  {article.category} |{" "}
                  {article.publishedAt &&
                    format(article.publishedAt, "yyyy.MM.dd")}
                </Label>
                <Heading as="h2" size="title-m" className={articleTitle}>
                  {article.title}
                </Heading>
                <Text size="s" className={articleDescription}>
                  {article.description}
                </Text>
              </div>
              {article.thumbnail && (
                <div className={thumbnailWrapper}>
                  <Image
                    src={article.thumbnail.url}
                    alt="Thumbnail"
                    fill
                    className={thumbnailImage}
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
