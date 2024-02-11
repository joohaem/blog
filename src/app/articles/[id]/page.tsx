import ArticlePage from '@/components/ArticlePage';
import Comments from '@/components/Comments';
import Container from '@/components/Container';
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
      description: article.description,
      type: 'article',
      images: article.thumbnail ?? '',
    },
  };
}

async function Article({ params }: ArticleProps) {
  return (
    <Container>
      <ArticlePage params={params} />
      <Comments />
    </Container>
  );
}

export default Article;