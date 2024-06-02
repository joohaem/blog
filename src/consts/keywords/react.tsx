import Link from "next/link";

const KEYWORDS = [
  {
    title: "Render Props Pattern (+ HOC Pattern)",
    content: (
      <div>
        - <u>HOC</u> :: 여러 컴포넌트가 <u>동일한 데이터에 액세스</u>해야 하거나{" "}
        <u>동일한 로직</u>을 포함할 때 컴포넌트 로직을 재사용할 수 있으면 매우
        편리하다. (Using the HOC pattern, it`s easy to end up with a deeply
        nested component tree.)
        <br />- <u>render props</u> :: 컴포넌트는 렌더링 프로퍼티를 호출하기만
        할 뿐, 다른 것을 렌더링하지 않는다. 예시 라이브러리로는 React Router,
        Formik, ... 등이 있다. “render” 라는 prop을 구성하기 보다 위처럼
        children으로 렌더링하여 추가적인 인터페이스에 대해 고민하지 않을 수
        있다. (naming collisions → HOC Cons)
        <br />
        <br />
        이는 HOC 패턴보다 더 잘 활용되는 듯 한다. 하지만 단점은 deep component
        nesting에서 나타난다. 중첩된 구조로 가독성이 떨어지는 결과가 나는데,
        이는 Hook으로 대체될 수 있다. Hook을 사용함으로써 데이터를 제공하기 위한
        많은 양의 코드를 줄여줄 수 있다.
        <br />
        | Render props are used in modern React, but aren`t very common. For
        many cases, they have been replaced by custom Hooks. (by React docs)
        <br />
        <br />
        Hooks 패턴은 클래스 컴포넌트형에서 벗어나며, 함수로써 React state와
        lifecycle의 조작이 가능해졌다.
        <br />
        이전에 <u>로직을 추출하고 공유하는 문제</u>를(extracting and sharing
        non-visual logic) HOC나 Render props 패턴으로 풀며 되려 코드를 복잡하게
        하였지만, 대부분 <u>Hooks 패턴</u>으로 간단하게 해결된다. (
        <u>simple JS function</u>)
        <br />
        단점은 린트 없이 rule을 지키기 힘들고, 자주 사용하는 Hooks의 연습 시간이
        필요하다는 것이 있다.
        <br />
        <br />
        HOC와 Render Props 패턴은 클래스형 컴포넌트일 때에 비지니스 로직을
        재사용하고, 컴포넌트의 state를 UI로부터 분리하기 위해 많이 사용되었던
        패턴이다.
        <br />
        대부분 Hooks 패턴으로써 대체가 되지만, 여전히 사용되는 부분도 있다. (for
        example, a virtual scroller component might have a `renderItem` prop, or
        a <u>visual container</u> component might have its own DOM structure. -{" "}
        by React docs).
        <br />
        <u>
          Render Props 패턴은 jsx 부분을 분리하고 다른 컴포넌트들에 사이드
          이펙트(state 변화로 인한 리렌더링 등)를 주지 않게 state를 주입하는 데
        </u>
        에 유용한 패턴이라고 정리할 수 있다.
      </div>
    ),
    pathUrl: "render-props-pattern",
    date: new Date("2023-10-09"),
  },
].map((keyword) => ({
  ...keyword,
  category: "React" as const,
}));

export { KEYWORDS };
