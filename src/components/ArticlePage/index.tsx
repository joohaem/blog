import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

import { getArticleById } from '@/core/blog';
import { BlockRenderer } from '@/components/renderer/BlockRenderer';
import Container from '@/components/Container';
import Label from '@/components/Label';
import Text from '@/components/Text';
import Heading from '@/components/Heading';

import { backLink, bodyContainer, categories, categoryChip, date, thumbnailImageWrapper, label, thumbnailImage, title } from './index.css';


interface ArticlePageProps {
  params: {
    id: string
  }
}

async function ArticlePage({ params }: ArticlePageProps) {
  const id = params.id
  const article = await getArticleById(id);

  return (
    <Container>
      <Link href='/articles' className={backLink}>
        <BackIcon />
        <Text size='s' className={label}>뒤로 가기</Text>
      </Link>
      {article.thumbnail && (
        <div className={thumbnailImageWrapper}>
          <Image 
            src={article.thumbnail.url} 
            alt='Thumbnail Image' 
            fill 
            className={thumbnailImage}
          />
        </div>
      )}
      <div className={categories}>
        {article.category && (
          <>
            {/* <Link href={`/category/articles?category=${encode(article.category)}`}> */}
              <Text className={categoryChip}>
                {article.category}
              </Text>
            {/* </Link> */}
          </>
        )}
      </div>
      <Heading as="h1" size='headline-l' className={title}>
        {article.title}
      </Heading>
      <Label size='m' className={date}>
        {article.publishedAt && format(article.publishedAt, 'yyyy.MM.dd')}
      </Label>
      <Text className={bodyContainer}>
        <BlockRenderer blocks={article.blocks} />
      </Text>
    </Container>
  );
}

export default ArticlePage;

function BackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.852 2.642a.498.498 0 010 .7L7.194 10l6.658 6.658a.498.498 0 010 .7.498.498 0 01-.7 0L6.144 10.35a.498.498 0 010-.7l7.008-7.008a.498.498 0 01.7 0z'
        fill='#808388'
      />
    </svg>
  );
}
