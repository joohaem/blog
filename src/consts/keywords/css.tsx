import Link from "next/link";

const KEYWORDS = [
  {
    title: "Prevent pointer-events by position",
    content: (
      <div>
        Absolute로 위치가 고정된 요소는 일반적으로 다른 요소들 위에 떠 있기
        때문에 클릭 이벤트를 가로챌 수 있습니다. 해결책으로는 다음과 같은 것들이
        있을 수 있습니다:
        <br />
        &nbsp; &nbsp;1. <u>z-index 사용</u>: Absolute로 위치가 고정된 요소의
        z-index 값을 조절하여 버튼이 다른 요소들 위에 떠 있도록 설정합니다.
        <br />
        &nbsp; &nbsp;2. <u>pointer-events 사용</u>: Absolute로 위치가 고정된
        요소의 pointer-events 속성을 none으로 설정하여 해당 요소가 마우스
        이벤트를 가로채지 않도록 합니다.
        <br />
        <br />
        <u>position: absolute;</u>와 같이 마우스 이벤트를 가로챌 수 있는 CSS
        속성은 다음과 같은 속성들이 있습니다:
        <br />
        &nbsp; &nbsp;1. <u>absolute</u>: 이 속성은 요소를 문서의 흐름에서
        제거하고, 위치가 상대적으로 가장 가까운{" "}
        <u>조상 요소에 대해 상대적으로 배치</u>합니다. 이 속성을 가진 요소는
        일반적으로 다른 요소들 위에 떠 있게 되며, 이로 인해 마우스 이벤트를
        가로챌 수 있습니다
        <br />
        &nbsp; &nbsp;2. <u>fixed</u>: 이 속성은 요소를 뷰포트의 초기 컨테이너에
        대해 상대적으로 고정합니다. 즉, 스크롤되어도 항상 동일한 위치에 있게
        됩니다. 따라서 이 속성을 가진 요소도 마우스 이벤트를 가로챌 수 있습니다.
        <br />
        &nbsp; &nbsp;3. <u>sticky</u>: 이 속성은 요소를 문서의 흐름에 따라
        배치하지만 스크롤되는 컨테이너의 뷰포트 상단이나 하단에 도달하면
        상대적으로 고정됩니다. 따라서 일부 상황에서는 마우스 이벤트를 가로챌 수
        있습니다.
      </div>
    ),
    pathUrl: "prevent-pointer-events-by-position",
    date: new Date("2024-03-21"),
  },
  {
    title: "Flexbox Height issue on Safari",
    content: (
      <div>
        Safari Browser에서의 css flex box는 부모 요소에서 상속된 높이가 제대로
        계산되지 않는 문제가 있습니다. 이는 Safari Browser에서 계산 방식이
        차이가 있기 때문입니다.
        <br />
        <br />
        1. flex-direction이 column인 경우, `flex: 1` 또는 flex-basis가 auto로
        되어있을 때 이슈가 있을 수 있습니다.
        <br />
        “If a flex item has a definite flex basis and the flex container has a
        definite main size, its post-flexing main size is treated as definite
        (even though it might technically rely on the sizes of indefinite
        siblings to resolve its flexed main size).”
        <br />
        `height: auto`와 같이 basis 속성의 auto 값은 content의 높이 크기를
        가지게끔 동작합니다. 이를 해결하기 위해서는, `flex: 1 1 0`과 같이
        flex-basis의 값을 명시해주어야 합니다.
        <br />
        <br />
        Ref ::{" "}
        <Link href="https://github.com/philipwalton/flexbugs/issues/197">
          🔗https://github.com/philipwalton/flexbugs/issues/197
        </Link>
        <br />
        <br />
        2. `height: 100%`로 레이아웃을 잡아나갈 때, 높이 값을 계속해서
        이어주어야 합니다.
        <br />
        만약 1, 2, 3번의 block이 계층적으로 있을 때, 1번의 block이 height 400px,
        3번의 block이 height 100%라고 가정해 보겠습니다. 이 사이의 2번의 block은
        정의된 height가 없게 됩니다. Webkit 엔진은 이를 “missing link”라고
        정의하게 됩니다.
        <br />
        “Chrome: <u>give me height: 100%</u>. Chrome looks to the (1st) parent
        for reference and responds: <u>100% of what? I don`t see anything</u>
        (ignoring the flex: 1 rule that is there). As a result, it applies
        height: auto (content height), in accordance with the spec.”
        <br />
        즉, `flex: 1`과 같은 속성에 관계 없이, height 값을 끊어지지 않게
        명시해주어야 할 수 있습니다.
        <br />
        OR
        <br />
        “Nested Flex Containers”, flex box를 중첩해서 레이아웃을 잡아나갈 수도
        있습니다. 상대 height 값이나, table 관련 css 속성, vertical-align,
        absolute position 등을 사용하지 않아도 됩니다. flex box는 어떻게 보면
        상위 호환의 개념일 수 있습니다.
        <br />
        `display: flex`의 flex box는 자동적으로 `align-items: stretch` 속성을
        포함합니다. 이는 height가 선언되지 않은 자식에게 전체 height의 공간을
        제공합니다.
        <br />
        그것이 아니라면, 자식에게 `flex: 1`의 속성을 주며 전체 공간을 확보할 수
        있습니다.
        <br />
        <br />
        Ref ::{" "}
        <Link href="https://stackoverflow.com/questions/33636796/chrome-safari-not-filling-100-height-of-flex-parent">
          🔗https://stackoverflow.com/questions/33636796/chrome-safari-not-filling-100-height-of-flex-parent
        </Link>
      </div>
    ),
    pathUrl: "flex-box-height-issue-on-safari",
    date: new Date("2024-03-20"),
  },
  {
    title: "Standard for Containing Block with absolute, fixed position",
    content: (
      <div>
        position 값이 relative, static 인 경우에는 일반적인 문서 흐름에 따라
        배치합니다.
        <br />
        하지만 position 값이 absolute, fixed 인 경우에는 요소를 일반적인 문서
        흐름에서 제거하고, 페이지 레이아웃에 공간을 배정하지 않습니다.
        <br />
        <br />
        <u>absolute</u>
        <br />
        해당 경우에는 가장 가까운 relative position 의 조상 요소에 대해
        상대적으로 배치한다고 알고 있습니다. 하지만 조상 중 위치 지정 요소가
        없다면 초기 Containing Block 을 기준으로 삼습니다.
        <br />
        Containing Block 은 가장 가까운 조상 블록 컨테이너(~block box) 또는 조상
        요소(table, flex, grid) 또는 블록 컨테이너 자기 자신의 content 영역
        경계를 따라 형성됩니다. absolute의 경우에는 position 속성 값이 relative
        뿐만 아니라 static 이 아닌 fixed, absolute, sticky 인 조상 모두가
        해당됩니다.
        <br />
        FYI, Containing Block 으로부터 요소의 크기와 위치의 백분율 값이
        계산됩니다
        <br />
        <br />
        <u>fixed</u>
        <br />
        해당 경우에는 뷰포트를 조상 요소로써 배치한다고 알고 있습니다. 하지만 이
        역시 뷰포트의 초기 Containing Block 을 기준으로 삼아 배치하기 때문에,
        요소의 조상 중 하나가 transform, perspective, filter 속성 중 하나라도
        none 값이 아니라면, 뷰포트 대신 이 조상을 Containing Block 으로
        삼습니다. (이는 Containing Block 의 조건으로, absolute도 함께
        해당합니다.) 상세한 조건은 아래와 같습니다.
        <br />
        &nbsp; &nbsp;1. transform 이나 perspective 속성이 none 이 아니다.
        <br />
        &nbsp; &nbsp;2. will-change 속성값이 transform 이나 perspective 이다.
        <br />
        &nbsp; &nbsp;3. filter 속성이 none 이다.
        <br />
        &nbsp; &nbsp;4. contain 속성이 paint 이다.
        <br />
        <br />
        Ref ::{" "}
        <Link href="https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block">
          🔗https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block
        </Link>
      </div>
    ),
    pathUrl: "standard-for-containing-block-with-absolute-fixed-position",
    date: new Date("2024-03-06"),
  },
  {
    title: "min-* property in Flexbox",
    content: (
      <div>
        flex box 내의 요소들에 있어서 flex (flex-grow, flex-shrink, flex-basis)
        속성으로써 유연하게 차지하는 공간을 제어할 수 있습니다.
        <br />
        하지만 flex-basis보다 height와 width 값, 더 나아가 min-*, max-*
        (min-height, min-width, …) 속성이 우선적으로 적용되게 됩니다. 따라서,
        기본값은 auto를 바꿔주어야 flex box 내의 차지하는 공간을 의도한 대로
        조정할 수 있는 경우가 있습니다.
        <br />
        <br />
        예를 들어, vertical 한 flex: 1의 공간에서 요소의 스크롤을 하고 싶다고 할
        때에, 아래와 같은 css가 필요할 것입니다.
        <br />
        ```
        <br />
        flex: 1;
        <br />
        min-height: 0;
        <br />
        ```
      </div>
    ),
    pathUrl: "min-property-in-flexbox",
    date: new Date("2024-02-29"),
  },
].map((keyword) => ({ ...keyword, category: "CSS" as const }));

export { KEYWORDS };
