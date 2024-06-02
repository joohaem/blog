import Image from "next/image";
import Link from "next/link";

import Text from "@/components/Text";

import { containerRoot, image, imageWrapper, text, textLink } from "./page.css";

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
        우리가 살아가는 삶에는 정답이 없다고 생각합니다. 태어나면서 미리 정해진
        목표가 없는 삶에, 인위적으로 정체성을 부여하기는 불가능합니다. 마치
        모호한 역할을 하는 함수에 이름을 짓기와 비슷합니다. 그렇다면 우리는 어떤
        것을 지향하며 살아나가야 할까요?
        <br />
        <br />
        삶의 의미에 대한 부재를 인지하고, 유한한 삶을 느끼며, 나만의 의미를
        하루하루 담고 싶어합니다. 내가 살아가는 환경 속에서 내가 느낄 수 있는
        감정과 경험을 찾기 위해 주도적으로 노력합니다.
        <br />
        <br />
        <Link href="https://snupi.tistory.com/220" className={textLink}>
          🔗 22년까지 어떤 흔적을 남겨왔는지
        </Link>
        를 보시면, 저에 대한 이해가 더욱 쉬워지실 것이라 생각합니다.
      </Text>
    </div>
  );
};

export default Life;
