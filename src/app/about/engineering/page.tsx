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

const Engineering = () => {
  return (
    <div className={containerRoot}>
      <div className={imageWrapper}>
        <Image
          src="/aboutEngineering.png"
          alt="about my engineering"
          fill
          className={image}
        />
      </div>
      <Text className={text}>
        제가 주도적으로 행하는 일 중 하나는 엔지니어링입니다. 여러 요소들이
        저에게 동기를 불러일으킵니다.
        <br />
        <br />
        1. 프로덕트를 만들기 위해 팀원들과 함께 하는 소통과 의사결정이
        즐겁습니다. 일을 더 잘 하기 위한 커뮤니케이션 스킬에 대해 고민합니다. 더
        투명하고 적극적이고 능동적으로 소통하려 노력합니다. 크고작은 갈등 상황을
        신뢰를 기반으로 해소하기 위해{" "}
        <Link href="https://snupi.tistory.com/225" className={textLink}>
          🔗 비폭력대화
        </Link>
        를 실천합니다.
        <br />
        <br />
        2. IT 개발자들 간의 문화에 자부심을 가집니다. 다른 집단보다 서로에게
        지식을 나누는 것에 거리낌이 없습니다. 문제를 해결하거나 새로운
        아이디어를 발견했을 때, 이를 다른 개발자들과 공유하며 새로운 솔루션을
        기대합니다. 이는 제가 개발에 빠지게 된 이유 중 하나이며, 다른 개발자들
        덕분에 끊임없이 자극을 받으며 성장할 수 있습니다.
        <br />
        <br />
        3. 웹 환경에 대한 애정을 가집니다. 어려서부터 컴퓨터 앞에 앉아 웹 서핑을
        즐기며 커왔기 때문에 웹 개발은 저에게 가장 익숙하고 특별한 분야입니다.
        개발을 하며 손재주 없는 제가 페이지를 그리는 행위와, 사람의 장애여부와
        관계 없이 어플리케이션을 이용할 수 있게끔 도와주는 웹 접근성이 주는
        의미에 크게 매료되었습니다.
        <br />
        <br />
        4. 매니징의 영역은 더욱이 즐겁습니다. 팀원들의 불편함을 해결하는 것이
        사용자의 불편함을 해결하는 것과 마찬가지로 저에게 행복을 주는 일입니다.
        <Link href="https://snupi.tistory.com/212" className={textLink}>
          🔗 서번트 리더의 역할로 팀원들과 함께 성장했던 경험
        </Link>
        이 있습니다.
        <br />
        <br />
        <div className={dateText}>Last Updated 2024.02.12.</div>
      </Text>
    </div>
  );
};

export default Engineering;
