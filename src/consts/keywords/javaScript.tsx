import Link from "next/link";

const KEYWORDS = [
  {
    title: "import/no-cycle",
    content: (
      <div>
        eslint-plugin-import 플러그인의 규칙 중{" "}
        <Link href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md#importno-cycle">
          🔗<u>no-cycle</u>
        </Link>
        에 해당하는 규칙이 있습니다.
        <br />
        의존성 모듈에 의해 다시 path가 resolve 되지 않는가를 감지하는 린트
        규칙입니다.
        <br />
        왜 해당 규칙이 필요할까요?
        <br />
        <br />
        왜 순환되는 import는 안티 패턴이 되는지는 크게 아래 두 가지 이유가
        있습니다.
        <br />
        &nbsp; &nbsp;1. <u>로드 순서에</u> 문제가 있습니다. A 모듈에서 B 모듈을
        참조하고, B 모듈에서 A 모듈을 참조하게 되는 상황입니다. A 모듈에서 B
        모듈을 참조하는 시점에 B 모듈이 (A 모듈을 참조하기 전이기 때문에) 완전한
        로드 상태가 아닐 수 있습니다. undefined나 불완전한 객체 상태를
        참조함으로써 올바른 동작을 보장할 수 없습니다. 특히, ES6 모듈
        시스템에서는 로딩 순서를 정적으로 결정하기 때문에 문제가 두각됩니다.
        <br />
        &nbsp; &nbsp;2. <u>사이드 이펙트</u>에 쉽게 노출됩니다. A 모듈을
        수정하면 B 모듈이 영향을 받고, 반대의 경우에도 마찬가지이기 때문에 동작
        관리를 어렵게 합니다. 이는 디버깅이나 유지보수의 어려움을 야기합니다.
        <br />
        <br />
        <u>Import Cycle</u>은 React 입문자에게 쉽게 드러나는 안티 패턴입니다.
        <br />
        가장 대표적으로는 B 컴포넌트를 정의하고, A라는 부모 컴포넌트에서 그에
        필요한 상태와 타입을 정의하며, B 컴포넌트를 정의하는 모듈에서 A 모듈의
        타입을 import 하는 상황 패턴입니다.
        <br />
        이를 린트 에러를 마주하며 의식적으로 역할에 따른 독립적인
        타입/컴포넌트/객체/모듈/… 을 설계하는 방향의 연습이 필요합니다.
        <br />
        <br />
        +
        <br />
        비슷한 개념으로는 Circular Reference; 순환 참조가 있습니다. A 객체의
        프로퍼티가 B 객체를, B 객체의 프로퍼티가 A 객체를 참조하는 예시를 들 수
        있죠.
        <br />이 역시 메모리 누수나, 무한 루프 등의 문제점이 발생하기 때문에
        안티 패턴으로 규정이 되는 개념임을 알 수 있습니다.
      </div>
    ),
    pathUrl: "import-no-cycle",
    date: new Date("2024-09-21"),
  },
  {
    title: "Option passive of Event Listener",
    content: (
      <div>
        Event interface 중 <u>preventDefault()</u> 메서드가 있습니다. 이를 통해
        이벤트에서 User의 기본 동작을 실행하지 않도록 지정할 수 있습니다. 추가
        설정으로 이벤트를 핸들링 하는 더 다양한 요구사항을 만족할 수 있습니다.
        <br />
        <br />
        addEventListener()로 등록된 이벤트는 Compositor thread에서 처리됩니다.
        하지만 JavaScript로써 이벤트 핸들링 로직을 커스텀 할 수 있고, 이에 따라
        기본동작을 취소할 수도 있기 때문에 Main thread를 거칩니다. Main thread를
        거쳐 렌더러 프로세스로 도출된 Render tree를 받을 때까지 대기합니다.
        <br />
        이로써 개발자는 페이지에 사용자 동작이나 이벤트들에 반응하는 기능을
        추가할 수 있습니다. 하지만 Event listener를 잘못 작성한다면, 특히 Mobile
        Device 환경에서의 <u>성능 문제</u>를 일으킬 수 있습니다.
        <br />
        <br />
        해당 부분의 최적화를 위해 event listener 메서드에 passive option이
        사용됩니다. <u>passive option</u>은 touch 또는 wheel, 또는 resize
        listener 등에서 개발자가 preventDefault()를 호출하여 스크롤을
        비활성화하지 않겠다고 선언하는 것입니다.
        <br />
        이렇게 되면 브라우저는 JavaScript를 기다리지 않고 즉시 스크롤에 응답하여
        User에게 더 안정적이고 smooth한 경험을 제공할 수 있습니다.
      </div>
    ),
    pathUrl: "passive-option-of-event-listener",
    date: new Date("2024-03-11"),
  },
  {
    title: "Getter, Setter pattern",
    content: (
      <div>
        class와 같이 데이터를 저장하는 전용 데이터 객체에 대해, Getter, Setter가
        반드시 있어야 하는 것은 아닙니다. 일반적으로 public, 접근자, mitator를
        제공한다면 코드를 사용하는 모든 사람에게 구현이 노출되어 캡슐화가
        불가능합니다. 이로인해 향후 코드 변경이나 필드 제거 등이 어려워질 수
        있습니다.
        <br />
        필요한 경우에 Getter, Setter를 제공한다면, 필드가 최종 버전이라도,
        클레스는 필드에 대한 불변성을 가지지 않을 수 있습니다.
        <br />
        <br />
        반면 Getter, Setter에 대한 Cons는 다음과 같습니다.
        <br />
        - 성능 저하 :: Getter Setter 패턴은 데이터에 접근할 때 메서드를 호출하는
        방식을 사용하기 때문에, 일반적인 속성 접근보다 성능이 떨어질 수
        있습니다. 특히 반복적으로 접근해야 하는 경우에는 성능 저하가 더 크게
        나타날 수 있습니다.
        <br />
        - 가독성 감소 :: Getter Setter 메서드를 사용하면 코드의 가독성이 감소할
        수 있습니다. 객체의 속성을 직접 접근하는 것보다는 메서드를 통해
        접근하므로 코드가 길어지고 복잡해질 수 있습니다. 이는 코드의 이해와
        유지보수를 어렵게 만들 수 있습니다.불필요한
        <br />
        - 복잡성 :: Getter Setter 패턴은 모든 속성에 대해 getter와 setter
        메서드를 정의해야 합니다. 하지만 모든 속성이 getter와 setter를 필요로
        하는 것은 아닐 수 있습니다. 이러한 패턴을 적용하면 불필요한 복잡성이
        추가될 수 있습니다.
        <br />
        <br />
        Ref ::{" "}
        <Link href="https://www.quora.com/Why-are-getters-and-setters-increasingly-considered-an-anti-pattern-in-programming-circles">
          🔗https://www.quora.com/Why-are-getters-and-setters-increasingly-considered-an-anti-pattern-in-programming-circles
        </Link>
      </div>
    ),
    pathUrl: "getter-setter-pattern",
    date: new Date("2023-12-12"),
  },
].map((keyword) => ({
  ...keyword,
  category: "JavaScript" as const,
}));

export { KEYWORDS };
