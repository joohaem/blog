import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { SOURCE_DATABASE } from '@/consts/env';
import { propertyResolver } from '@/core/notion/property';
import { getBlocks, getDatabaseContents, getPage } from '@/core/notion/request';

export async function getArticles() {
  const objects = await getDatabaseContents(SOURCE_DATABASE);

  const articles = objects.map(({ properties, id }) => {
    const { title, thumbnail, publishedAt, category, description, isPublished } = extractArticleProperties(properties);

    return {
      id,
      title,
      thumbnail,
      publishedAt,
      category,
      description,
      isPublished
    };
  });

  return articles;
}

export async function getArticleById(id: string) {
  const [meta, blocks] = await Promise.all([getPage(id), getBlocks(id)]);

  const { title, publishedAt, category, thumbnail, description } = extractArticleProperties(meta.properties);

  return {
    title,
    publishedAt,
    category,
    thumbnail,
    description,
    blocks,
  };
}

function extractArticleProperties(properties: PageObjectResponse['properties']) {
  const resolver = propertyResolver(properties);

  const title = resolver.title('title');
  const publishedAt = resolver.date('publishedAt');
  const category = resolver.select('category');
  const description = resolver.richText('description');
  const isPublished = resolver.checkbox('isPublished');
  const thumbnailFiles = resolver.files('thumbnail');
  const thumbnail = thumbnailFiles.length > 0 ? thumbnailFiles[0] : null;

  return {
    title,
    publishedAt,
    description,
    category,
    thumbnail,
    isPublished
  };
}
