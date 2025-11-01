import Image from "next/image";
import Link from "next/link";

import Text from "@/components/Text";

import {
  containerRoot,
  dateText,
  image,
  imageWrapper,
  text,
  textLink,
} from "../styles/common.css";

const Life = () => {
  return (
    <div className={containerRoot}>
      <div className={imageWrapper}>
        <Image
          src="/aboutLife.jpeg"
          alt="about my life"
          fill
          className={image}
        />
      </div>
      <Text className={text}>
        우리가 살아가는 삶에는 정답이 없습니다. 각자에게 태어나면서 부여되는
        목표는 없기 때문에, 인위적으로 정체성을 부여하기는 불가능합니다. 마치
        모호한 역할을 하는 함수에 이름을 짓기와 비슷합니다. 그렇다면 우리는 어떤
        것을 지향하며 살아나가야 할까요?
        <br />
        <br />
        삶의 의미에 대한 부재를 인지하고, 유한한 삶을 느끼며, 나만의 의미를
        하루하루 담고 싶어합니다. 내가 살아가는 환경 속에서 내가 느낄 수 있는
        감정과 경험을 찾기 위해 노력합니다.
        <br />
        <br />
        <Link href="https://snupi.tistory.com/220" className={textLink}>
          🔗 22년까지 어떤 흔적을 남겨왔는지
        </Link>
        를 보시면, 저라는 사람에 대해 조금이나마 이해해주실 수 있으리라
        기대합니다.
        <br />
        <br />
        <div className={dateText}>Last Updated 2024.02.12.</div>
      </Text>
    </div>
  );
};

export default Life;
