import Image from "next/image";
import Link from "next/link";

import Text from "@/components/Text";

import { containerRoot, image, imageWrapper, text, textLink } from "./page.css";

const Contact = () => {
  return (
    <div className={containerRoot}>
      <div className={imageWrapper}>
        <Image
          src="/aboutContact.jpeg"
          alt="about my contact"
          fill
          className={image}
        />
      </div>
      <Text className={text}>
        회고하고 성찰하는 것과 동시에, 소통하며 나아가는 것을 좋아합니다.
        <br />
        <br />
        저는 원체 현실적이고 안정적인 성향으로, 그저 어느 환경이든 최상의 결과를
        내고 싶어합니다. 혼자서는 우물 밖의 세상에 관심을 가지지 않았을
        것입니다. 하지만 다양한 경험과 자신감이 쌓이며 더 다채로운 잠재력을
        발휘하고 싶다는 생각을 하게 되었습니다.
        <br />
        <br />
        다른 이와의 대화 혹은 피드백은 저를 늘 성장시켜줍니다. 관점을 넓혀주고,
        넓어진 세상에서 역량을 키워낼 수 있습니다. 그래서 여러 새로운 이야기
        듣는 것을 즐겨합니다. 많은 소통을 환영하고 기대합니다.
        <br />
        <br />
        연락 주시면 기쁜 마음으로 회신 드리도록 할게요.
        <br />
        <Link
          href="http://www.linkedin.com/in/%EC%A3%BC%ED%95%A8-%EC%9D%B4-ba292b215"
          className={textLink}
        >
          🔗 Link to Linkedin
        </Link>
        <br />
        <Link href="mailto:joohaem@daum.net" className={textLink}>
          🔗 Sending Email
        </Link>
      </Text>
    </div>
  );
};

export default Contact;
