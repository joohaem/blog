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
  categoryChipsWrapper,
  thumbnailImage,
  thumbnailWrapper,
} from "./page.css";
import Text from "@/components/Text";

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

export default async function Articles({
  params,
}: ArticlesProps) {
  const currentCategory =
    params?.category && decode(decodeURIComponent(params.category));

  const articles = (await getArticles()).filter(({ isPublished }) => isPublished);
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
            <Chip active={!currentCategory}>전체</Chip>
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
                <Text className={articleInfo}>
                  {article.category} |{" "}
                  {
                    article.publishedAt 
                    && format(article.publishedAt, "yyyy.MM.dd")
                  }
                </Text>
                <Heading
                  as="h2"
                  size="title-l"
                >
                  {article.title}
                </Heading>
                <Text className={articleDescription}>
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
                    objectFit="cover"
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
