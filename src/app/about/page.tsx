import Image from "next/image";
import { content, contentImageWrapper, contentsContainer, descriptionWrapper } from "./page.css";
import Text from "@/components/Text";
import Link from "next/link";

const CONTENTS = [
  {
    id: 'life',
    href: '/about/life',
    imageSrc: '/aboutLife.jpeg',
    title: 'LIFE',
    description: '우리가 살아가는 삶에는 정답이 없습니다. 본질적인 의미가 없는 삶에 정체성을 부여하기는 불가능합니다.',
  },
  {
    id: 'engineering',
    href: '/about/engineering',
    imageSrc: '/aboutEngineering.jpeg',
    title: 'ENGINEERING',
    description: '제가 주도적으로 행하는 일 중 하나는 Engineering입니다. 그 중 웹 기반의 Frontend 작업을 주로 합니다.',
  },
  {
    id: 'blog',
    href: '/about/blog',
    imageSrc: '/aboutBlog.jpeg',
    title: 'BLOG',
    description: '이 공간은 저의 사고를 담아내는 공간이었으면 좋겠습니다. 개발을 하며 만난 개념들을 깊게 조사하고 탐구한 뒤, 가장 논리적인 해결방안으로 문제를 해결하려 노력합니다.',
  },
  {
    id: 'contact',
    href: '/about/contact',
    imageSrc: '/aboutContact.jpeg',
    title: 'CONTACT',
    description: '저는 소통을 통해 잠재력을 개발합니다. 원체 현실적이고 안정적인 성향으로, 혼자서는 다른 세상에 관심을 가지지 않았을 것입니다.',
  },
]

export default function About() {
  return (
    <section className={contentsContainer}>
      {
        CONTENTS.map(({ id, href, imageSrc, title, description }) => (
          <Link
            key={id} 
            href={href}
            className={content}
          >
              <div className={contentImageWrapper}>
                <Image
                  src={imageSrc}
                  alt={id}
                  fill
                  objectFit='cover'
                />
              </div>
              <Text size="l">
                {title}
              </Text>
              <Text size="s" className={descriptionWrapper}>
                {description}
              </Text>
          </Link>
        ))
      }
    </section>
  );
}
