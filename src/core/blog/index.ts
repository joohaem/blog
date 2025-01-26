import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { notFound } from "next/navigation";

import { SOURCE_DATABASE } from "@/consts/env";
import { propertyResolver } from "@/core/notion/property";
import { getBlocks, getDatabaseContents, getPage } from "@/core/notion/request";

export async function getArticles() {
  const objects = await getDatabaseContents(SOURCE_DATABASE);

  const articles = objects.map(({ properties, id }) => {
    const {
      title,
      urlPath,
      thumbnail,
      publishedAt,
      category,
      description,
      isPublished,
    } = extractArticleProperties(properties);

    return {
      id,
      title,
      urlPath,
      thumbnail,
      publishedAt,
      category,
      description,
      isPublished,
    };
  });

  return articles;
}

export async function getArticleByUrlPath(urlPath: string) {
  const articles = await getArticles();
  const article = articles.find((article) => article.urlPath === urlPath);

  if (!article) {
    notFound();
  };

  return getArticleById(article.id);
}

export async function getArticleById(id: string) {
  const [meta, blocks] = await Promise.all([getPage(id), getBlocks(id)]);

  const { title, urlPath, publishedAt, category, thumbnail, description } =
    extractArticleProperties(meta.properties);

  return {
    title,
    urlPath,
    publishedAt,
    category,
    thumbnail,
    description,
    blocks,
  };
}

function extractArticleProperties(
  properties: PageObjectResponse["properties"]
) {
  const resolver = propertyResolver(properties);

  const title = resolver.title("title");
  const urlPath = resolver.richText("urlPath");
  const publishedAt = resolver.date("publishedAt");
  const category = resolver.select("category");
  const description = resolver.richText("description");
  const isPublished = resolver.checkbox("isPublished");
  const thumbnailFiles = resolver.files("thumbnail");
  const thumbnail = thumbnailFiles.length > 0 ? thumbnailFiles[0] : null;

  return {
    title,
    urlPath,
    publishedAt,
    description,
    category,
    thumbnail,
    isPublished,
  };
}
