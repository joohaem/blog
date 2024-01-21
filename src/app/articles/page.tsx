import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { decode, encode } from "js-base64";

import { getArticles } from "@/blog";

import Header from "@/components/Header";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import Chip from "@/components/Chip";
import {
  articleListContainer,
  catergoryChipsWrapper,
  thumbnailImage,
  thumbnailWrapper,
} from "./page.css";
import Heading from "@/components/Heading";

export async function generateStaticParams() {
  const articles = await getArticles();

  const params = articles
    .map((article) => article.category)
    .filter((category): category is string => !!category)
    .map((category) => ({ category: encode(category) }));

  return params;
}

export default async function Articles({
  params,
}: {
  params: { category?: string };
}) {
  const currentCategory =
    params?.category && decode(decodeURIComponent(params.category));

  const articles = (await getArticles()).filter((article) => article.publish);
  // const categories = articles
  //   .map((article) => article.category)
  //   .filter((category): category is string => !!category);
  // const filteredArticles = articles.filter(
  //   (article) => !currentCategory || article.category === currentCategory
  // );

  return (
    <>
      <Header />
      <PageTitle title="Articles" />
      <Container>
        <div className={catergoryChipsWrapper}>
          <Link href="/">
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
                {/* TODO :: Text component */}
                <div>
                  {article.category} |{" "}
                  {article.publishedAt &&
                    format(article.publishedAt, "yyyy.MM.dd")}
                </div>
                <Heading size="title-l">{article.title}</Heading>
              </div>
              {article.thumbnail && (
                <div className={thumbnailWrapper}>
                  <Image
                    src={article.thumbnail.url}
                    alt="Thumbnail"
                    width="140"
                    height="140"
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
