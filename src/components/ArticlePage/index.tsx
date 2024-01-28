import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { encode } from 'js-base64';

import { getArticleById } from '@/core/blog';
import Container from '@/components/Container';
import { BlockRenderer } from '@/components/renderer/BlockRenderer';

import { backLink, bodyContainer, categories, categoryChip, date, imageWrapper, label, title } from './index.css';


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
      <Link href='/' className={backLink}>
        <BackIcon />
        <span className={label}>블로그 홈 가기</span>
      </Link>
      {article.thumbnail && (
        <div className={imageWrapper}>
          <Image 
            src={article.thumbnail.url} 
            alt='Thumbnail Image' 
            fill 
            objectFit='contain'
          />
        </div>
      )}
      <div className={categories}>
        {article.category && (
          <>
            {/* <Link href={`/category/articles?category=${encode(article.category)}`}> */}
              <div className={categoryChip}>
                {article.category}
              </div>
            {/* </Link> */}
          </>
        )}
      </div>
      <h1 className={title}>
        {article.title}
      </h1>
      <div className={date}>
        {article.publishedAt && format(article.publishedAt, 'yyyy.MM.dd')}
      </div>
      <div className={bodyContainer}>
        <BlockRenderer blocks={article.blocks} />
      </div>
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
