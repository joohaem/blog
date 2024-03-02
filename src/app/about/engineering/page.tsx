import Image from "next/image"

import Text from "@/components/Text"

import { containerRoot, image, imageWrapper, text, textLink } from "./page.css"
import Link from "next/link"

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
        제가 주도적으로 행하는 일 중 하나는 Web Frontend Engineering입니다. 여러 요소들이 저에게 동기를 불러일으킵니다.
        <br /><br />
        1. 프로덕트를 만들기 위해 팀원들과 함께 하는 소통과 의사결정의 과정이 즐겁습니다. 일을 더 잘 하기 위한 커뮤니케이션 스킬에 대해 고민합니다. 더 투명하고 적극적이고 능동적으로 소통하려 노력합니다. 크고작은 갈등 상황을 신뢰를 기반으로 해소하기 위해 {" "}
        <Link
          href="https://snupi.tistory.com/225"
          className={textLink}
        >
          🔗 비폭력대화
        </Link>
        를 실천합니다.
        <br /><br />
        2. Frontend Engineering은 다음과 같은 작업을 수행합니다. 도메인을 개념적으로 모델링 하는 것 / UI, UX, DX를 고려하여 컴포넌트를 구성하는 것 / 사용자의 행동을 감지하고 적절하게 반응하는 것 / 적절한 레이어에서 서버와의 데이터 통신을 관리하는 것. 이러한 일련의 과정을 거치는 것이 지금 저에게 큰 즐거움을 줍니다.
        <br /><br />
        3. IT 개발자들 간의 문화에 자부심을 가집니다. 다른 집단보다 서로에게 지식을 나누는 것에 거리낌이 없습니다. 문제를 해결하거나 새로운 아이디어를 발견했을 때, 이를 다른 개발자들과 공유하며 새로운 솔루션을 기대합니다. 이는 제가 개발에 빠지게 된 이유 중 하나이며, 긍정적인 자극을 끊임없이 받을 수 있습니다.
        <br /><br />
        4. 웹 환경에 대한 애정을 가집니다. 어려서부터 웹 서핑을 즐겼기 때문에 웹 개발은 저에게 가장 익숙하고 특별한 분야입니다. 개발을 하며 손재주 없는 제가 페이지를 그리는 행위와 장애에 관계 없이 어플리케이션을 이용하는 웹 접근성이 주는 의미에 크게 매료되었습니다.
        <br /><br />
        5. 매니징의 영역은 더욱이 즐겁습니다. 팀원들의 불편함을 해결하는 것이 사용자의 불편함을 해결하는 것과 마찬가지로 저에게 행복을 주는 일입니다. 
        <Link
          href="https://snupi.tistory.com/212"
          className={textLink}
        >
          🔗 서번트 리더의 역할로 팀원들과 함께 성장했던 경험
        </Link>
        이 있습니다.
      </Text>
    </div>
  )
}

export default Engineering