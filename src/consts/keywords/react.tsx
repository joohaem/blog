import Link from "next/link";

const KEYWORDS = [
  {
    title: "TanStack query, invalidate vs refetch",
    content: (
      <p>
        <Link href="https://github.com/TanStack/query/discussions/2468#discussioncomment-8983853">
          🔗TanStack query Discussion
        </Link>
        <br />
        <br />
        refetch는 항상 리패치 하지만, invalidate는 좀 더 “smart” 하게 stale
        상태로 mark하여 다음 observer mount 시에 리패치 하게끔 합니다. 이는 기본
        옵션일 때의 동작이고, invalidate 메소드의 refetchType 속성을 이용하여
        조정할 수 있습니다.
        <br />
        <br />
        <Link href="https://github.com/TanStack/query/blob/2273105df980b3763747c101c301e213ed1df98b/packages/query-core/src/queryClient.ts#L279">
          🔗코드 내부 구현
        </Link>
        을 살펴보자면, invalidate는 refetch의 추상화된 레벨임을 알 수 있습니다.
        효율적으로 쿼리들을 invalidate하고, refetch 옵션에 따라 필요한 쿼리들을
        refetch 합니다. 그렇기 때문에 tanstack-query의 메인테이너 Dominik
        Dorfmeister는, refetch를 사용하지 않는다고도 이야기 합니다.
        <br />
        <br />
        쿼리가 invalidate 되면 일어나는 과정에 대해 아래와 같이 ChatGPT 이용해
        정리하며, 글을 마무리합니다.
        <br />
        &nbsp; &nbsp;1. <u>쿼리 상태 변경</u> :: 쿼리가 “invalidate“로 설정되면,
        해당 쿼리의 `isStale` 상태가 `true`로 설정됩니다. 이는 쿼리 데이터가
        최신이 아니며, 다음 접근 시 자동으로 데이터를 다시 가져와야 함을
        의미합니다.
        <br />
        &nbsp; &nbsp;2. <u>캐시의 데이터 상태 변경</u> :: 내부적으로 쿼리
        데이터가 있는 캐시 항목을 찾아 `stale` 상태로 마킹합니다. 이 마킹은 쿼리
        키에 연결된 모든 캐시 항목에 적용될 수 있습니다.
        <br />
        &nbsp; &nbsp;3. <u>백그라운드에서의 자동 재요청</u> :: 쿼리가 활성화되어
        있고, 자동 재패칭 설정이 활성화된 경우 (기본적으로 활성화되어 있음),
        쿼리가 사용되는 컴포넌트가 마운트되어 있으면 백그라운드에서 즉시
        데이터를 다시 패치합니다.
        <br />
        &nbsp; &nbsp;4. <u>사용자 인터페이스의 반응</u> :: 컴포넌트에서 이
        쿼리를 사용하고 있다면, 쿼리가 다시 패칭되는 동안 로딩 상태가 표시될 수
        있습니다. 이는 쿼리의 `isLoading` 또는 `isFetching` 상태가 `true`로
        설정되어 있기 때문입니다.
        <br />
        &nbsp; &nbsp;5. <u>에러 핸들링</u> :: 새로운 패치 과정에서 오류가
        발생하면, 쿼리의 `error` 상태가 업데이트되고, 관련된 컴포넌트에서 이를
        감지하여 적절한 UI 반응을 보일 수 있습니다.
      </p>
    ),
    pathUrl: "tanstack-query-invalidate-vs-refetch",
    date: new Date("2024-07-06"),
  },
  {
    title: "Render Props Pattern (+ HOC Pattern)",
    content: (
      <p>
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
      </p>
    ),
    pathUrl: "render-props-pattern",
    date: new Date("2023-10-09"),
  },
].map((keyword) => ({
  ...keyword,
  category: "React" as const,
}));

export { KEYWORDS };
