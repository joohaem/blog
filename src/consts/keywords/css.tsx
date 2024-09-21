import Link from "next/link";

const KEYWORDS = [
  {
    title: "Tips of Sticky",
    content: (
      <div>
        1.
        <br />
        sticky 속성은 부모 요소가 scroll context로 작용할 때만 동작합니다.
        <br />
        즉, <u>부모 요소가 스크롤 가능해야 합니다.</u> overflow: auto, overflow:
        scroll 또는 overflow: hidden 속성 중 하나를 가지고 있어야 하며, 부모
        요소의 크기가 자식 요소보다 커야 합니다.
        <br />
        <br />
        2.
        <br />
        부모 기준으로 길이가 stretch 된 요소에는 sticky가 적용되지 않습니다.
        <br />
        예를 들어 부모가 flex display를 갖고 있다면, align-self 속성을 조정하며
        스크롤 가능한 높이값을 설정해주어야 합니다.
        <br />
        <br />
        3.
        <br />
        <u>sticky 요소는 컨테이너 밖을 나오지 못합니다.</u>
        <br />
        부모의 컨테이너 내에서만 위치할 수 있고, 부모 중{" "}
        <Link href="https://snupi.vercel.app/keywords/standard-for-containing-block-with-absolute-fixed-position">
          🔗Scroll Container
        </Link>
        에 대해 sticky가 적용됩니다.
      </div>
    ),
    pathUrl: "tips-of-sticky",
    date: new Date("2024-09-21"),
  },
  {
    title: "rem vs px",
    content: (
      <div>
        <u>rem</u>의 단위는 글꼴 크기를 지정하는 데에 사용되는 상대 단위로,{" "}
        <u>‘root em’</u>의 약자입니다.
        <br />
        HTML의 루트 요소인 {"<html>"} 요소의 font-size를 기준으로 계산됩니다.
        이는 :root 에 대응되므로 SVG는 {"<svg>"} 요소를 기준으로 계산됩니다.
        <br />
        <br />
        <u>pixel</u>은 하나의 디바이스 pixel을 의미합니다. 웹 디자인을 하며 가장
        기본적으로 사용된 단위입니다. 하지만 점차 디스플레이에 따라 디바이스의
        픽셀 밀도가 점점 높아져가기 때문에, 이 단위가 통용되지 않곤 합니다. (pt,
        in 등의 단위가 필요하지만, CSS에서는 px이 표준처럼 쓰입니다.)
        <br />
        또한, 브라우저의 줌 인/아웃도 기존에는 폰트 사이즈를 조작하였습니다.
        하지만 이제는 웹 페이지 내의 픽셀 기반 디자인이 고도화 되었습니다. 줌
        인/아웃 시에 레이아웃이 깨지기 시작하죠.
        <br />
        그렇기 때문에 상대값인 rem이 중요시 됩니다. 루트 폰트 사이즈와,
        미디어쿼리로 유연한 디자인을 구성할 수 있습니다.
        <br />
        <br />
        그러나 <u>단점 역시 존재</u>하죠.
        <br />
        &nbsp; &nbsp;1. 반대로 글 중심의 웹 페이지는 폰트 사이즈가 중요합니다.
        사용자가 글꼴의 크기를 키우거나 줄이고 싶어도 어려울 수 있습니다.
        <br />
        &nbsp; &nbsp;2. 브라우저 간에 렌더링 동작이 다를 수 있습니다. user
        agent를 기준으로 이를 방지하려면, 설정하고자 하는 파일이 더 복잡해질 수
        있습니다.
        <br />
        &nbsp; &nbsp;3. border나, fixed navigation bar와 같은 정밀한 픽셀 단위가
        필요할 수 있습니다. 그럴 때에는 신중하게 사용해야 합니다.
        <br />
        <br />
        Ref ::
        <br />
        <Link href="https://bootcamp.uxdesign.cc/why-engineers-and-designers-should-use-rem-over-px-and-how-to-automate-the-css-migration-157870257cad">
          🔗https://bootcamp.uxdesign.cc/why-engineers-and-designers-should-use-rem-over-px-and-how-to-automate-the-css-migration-157870257cad
        </Link>
        <br />
        <Link href="https://www.seeratawan.me/blog/why-you-should-move-from-px-to-rem-in-css">
          🔗https://www.seeratawan.me/blog/why-you-should-move-from-px-to-rem-in-css
        </Link>
      </div>
    ),
    pathUrl: "rem-vs-px",
    date: new Date("2024-08-17"),
  },
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
  {
    title: "100vw",
    content: (
      <div>
        디바이스 전체 너비를 표현하기 위해 주로 100vw css 속성을 사용하곤 한다.
        <br />
        페이지단에 max-width가 설정되어 있는 Container 컴포넌트를 사용하더라도,
        이는 flow에서 벗어나서 디바이스 전체 너비에 대한 길이로 지정됩니다.
        <br />
        <br />
        만약 100vw를 표현하는 코드가 전체적으로 구성되어 있는 상황을
        가정해봅시다.
        <br />
        그리고 5000px의 티비로 해당 서비스를 페인팅하고자 합니다.
        <br />
        저희가 지정했던 100vw가 올바른 니즈대로 표현이 될까요?
        <br />
        이는 서비스의 컨텐츠가 어떤 너비이든 상관없이 5000px의 너비를 표현할
        것이고, 이는 디자인의 시스템 flow에서 벗어난 스타일이 적용될 것입니다.
        <br />
        혹은, 그러한 디바이스에 맞추어 2400px의 최대 너비 레이어를 두고 싶다는
        디자인의 니즈가 있다면 어떻게 대응할 수 있을까요?
        <br />
        2400px의 박스 레이어를 추가한다고 해서 니즈에 충족이 될 수 있을까요?
        <br />
        없습니다. 저희는 100vw를 모두 수정해야 하고, 서비스 전체적으로 디자인이
        어긋나지 않는지 QA를 진행해야 하는 비용이 감수됩니다.
        <br />
        <br />
        이와 같은 상황을 방지하기 위해서는 100vw의 단위에 대한 사용을 조심해야
        합니다.
        <br />
        최대한 Container 컴포넌트의 max-width를 활용하여 최대 너비를 설정해야
        하고,
        <br />
        그 안의 페이지 혹은 컴포넌트 내의 스타일들을 부모(global)의 너비에
        의존하는 상대 너비를 사용하는 것이 좋습니다.
        <br />
        html, css의 동작 flow에 맞게끔 Section, Conatiner 컴포넌트를 구성하는
        것이 가장 바람직한 스타일링 방법이 될 수 있습니다.
      </div>
    ),
    pathUrl: "100vw",
    date: new Date("2023-11-07"),
  },
].map((keyword) => ({ ...keyword, category: "CSS" as const }));

export { KEYWORDS };
