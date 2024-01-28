import ArticlePage from '@/components/ArticlePage';

interface ArticleProps {
  params: {
    id: string
  }
}

async function Article({ params }: ArticleProps) {
  return (
    <ArticlePage params={params} />
  );
}

export default Article;