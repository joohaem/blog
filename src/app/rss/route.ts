import { Feed } from "feed";

import { BASE_URL } from "@/consts/env";
import { getArticles } from "@/core/blog";

// MEMO :: no need to revalidate
export async function GET() {
  const feed = new Feed({
    id: BASE_URL,
    title: `SNUPI Blog's RSS Feed`,
    language: "ko",
    author: {
      name: "SNUPI",
      email: "joohaem@daum.net",
      link: BASE_URL,
    },
    link: BASE_URL,
    description: "Stay up to date with my latest content",
    image: `${BASE_URL}/logo.svg`,
    favicon: `${BASE_URL}/favicon.ico`,
    copyright: "All rights reserved 2024, Joohaem Lee",
  });

  const articles = await getArticles();
  articles.forEach(
    ({ id, title, urlPath, thumbnail, publishedAt, description }) => {
      feed.addItem({
        id,
        title,
        link: `${BASE_URL}/articles/${urlPath}`,
        image: thumbnail?.url,
        date: publishedAt ?? new Date(),
        description,
      });
    }
  );

  const rss = feed.rss2();

  return new Response(rss, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
