import Link from "next/link";

const KEYWORDS = [
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
