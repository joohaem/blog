import { format } from "date-fns";
import { decode, encode } from "js-base64";
import Image from "next/image";
import Link from "next/link";

import Chip from "@/components/Chip";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Label from "@/components/Label";
import PageTitle from "@/components/PageTitle";
import Text from "@/components/Text";
import { getArticles } from "@/core/blog";

import {
  articleDescription,
  articleInfo,
  articleListContainer,
  articleTitle,
  categoryChipsWrapper,
  thumbnailImage,
  thumbnailWrapper,
} from "./page.css";

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
              href={`/articles/${article.id}`}
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
