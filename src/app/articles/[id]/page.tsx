import ArticlePage from '@/components/ArticlePage';
import { getArticleById, getArticles } from '@/core/blog';
import { Metadata, ResolvingMetadata } from 'next';

interface ArticleProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const articles = await getArticles();

  return articles
    .map((article) => ({
      id: article.id,
    }));
}

export async function generateMetadata({ params }: ArticleProps, _parent: ResolvingMetadata): Promise<Metadata> {
  const id = params.id;
  const article = await getArticleById(id);

  return {
    title: article.title,
    description: 'SNUPI Blog',
    openGraph: {
      title: `${article.title} | SNUPI Blog`,
      description: 'SNUPI Blog',
      type: 'article',
      images: article.thumbnail ?? '',
    },
  };
}

async function Article({ params }: ArticleProps) {
  return (
    <ArticlePage params={params} />
  );
}

export default Article;