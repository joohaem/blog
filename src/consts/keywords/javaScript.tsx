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
].map((keyword) => ({
  ...keyword,
  category: "JavaScript" as const,
}));

export { KEYWORDS };
