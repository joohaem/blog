import { Metadata, ResolvingMetadata } from "next";

import ArticlePage from "@/components/ArticlePage";
import Comments from "@/components/Comments";
import Header from "@/components/Header";
import { getArticleByUrlPath, getArticles } from "@/core/blog";

interface ArticleProps {
  params: {
    path: string;
  };
}

export async function generateStaticParams() {
  const articles = await getArticles();

  return articles.map((article) => ({
    path: article.urlPath,
  }));
}

export async function generateMetadata(
  { params }: ArticleProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.path;
  const article = await getArticleByUrlPath(id);

  return {
    title: `${article.title} | SNUPI Blog`,
    description: "SNUPI Blog",
    keywords: [
      "snupi",
      "joohaem",
      "javascript",
      "react",
      "graphql",
      "개발자",
      "개발자 블로그",
      "FE개발",
    ],
    openGraph: {
      title: `${article.title} | SNUPI Blog`,
      description: article.description,
      type: "article",
      images: article.thumbnail ?? "",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function Article({ params }: ArticleProps) {
  return (
    <>
      <Header />
      <ArticlePage params={params} />
      <Comments />
    </>
  );
}

export default Article;
