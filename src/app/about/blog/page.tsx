import Image from "next/image";

import Text from "@/components/Text";

import { containerRoot, image, imageWrapper, text } from "./page.css";

const Blog = () => {
  return (
    <div className={containerRoot}>
      <div className={imageWrapper}>
        <Image
          src="/aboutBlog.jpeg"
          alt="about my blog"
          fill
          className={image}
        />
      </div>
      <Text className={text}>
        같은 것을 다르게 보는 시각을 좋아합니다. 이 공간은 저의 사고를 담아내는
        공간이었으면 좋겠습니다. 인사이트를 정립하는 것, 그 과정에 담긴 저의
        사고들을 담는 블로그를 꾸리고자 합니다.
        <br />
        <br />
        개발을 하며 만난 개념들을 깊게 조사하고 탐구한 뒤, 가장 맞는
        해결방안으로 문제를 해결하려 노력합니다. 그리고 그 과정에서 얻은 지식과
        경험을 다른 사람들과 공유하기 위해 글로 정리합니다. 이렇게 정리한 글은
        제게도 가치가 있을 뿐만 아니라 다른 사람들에게도 도움이 되길 바랍니다.
        이런 이유로 제가 제작한 공간은 마치 제가 운영하는 도서관과 같습니다.
        <br />
        <br />
        요즘은 글을 어떻게 써야 할지에 대해 고민하고 있습니다. 다른 사람들을
        위해 제 사고를 정리하여 도움을 주고 싶다는 생각도 가지고 있지만, 동시에
        자기계발을 위해 망각의 곡선을 극복하기 위한 조각글들을 모아두고 싶다는
        생각도 합니다. 그래서 저는 아티클 공간과 키워드 공간을 나누어
        구성하였습니다.
      </Text>
    </div>
  );
};

export default Blog;
