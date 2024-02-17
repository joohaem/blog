import { MetadataRoute } from "next";

import { BASE_URL } from "@/consts/env";
import { getArticles } from "@/core/blog";

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const articles = (await getArticles()).map((article) => ({
    url: `${BASE_URL}/articles/${article.id}`,
    lastModified: new Date(),
  }));

  return [
    // {
    //   url: `${BASE_URL}`,
    //   lastModified: new Date(),
    // },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about/life`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about/engineering`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about/blog`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about/contact`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date(),
    },
    ...articles,
  ];
};

export default Sitemap;
