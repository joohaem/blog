import Link from "next/link";

const KEYWORDS = [
  {
    title: "Scroll State on Navigate Page (Next.js scroll option)",
    content: (
      <div>
        a 태그를 클릭하여 <u>페이지를 이동</u>하게 된다면, 새로운 페이지로 <u>{'load'} 이벤트</u>가 발생하게 됩니다.
        <br />
        이 때에 <u>x, y축의 스크롤 정보</u>는 0으로 <u>초기화</u> 되게끔 기본적으로 동작합니다.
        <br />
        <br />
        혹은 Next.js의 {"<Link />"} 컴포넌트의 onClick 으로 새로운 페이지로 이동할 때에도 스크롤 정보가 초기화 되는 것을 알 수 있습니다. 이는 <Link href="https://github.dev/vercel/next.js">🔗Next.js 내부 구현(/lib/router/router.ts)</Link>을 참고해보았을 때, Next.js 내에서 scroll 정보를 초기화 하여 기본 동작을 구현해낸 것을 알 수 있습니다.
        <br />
        <br />
        때론 페이지를 이동할 때에 스크롤 정보를 초기화하고 싶지 않은 경우도 있습니다. 이런 니즈를 위해 Next.js에서는 <Link href="https://nextjs.org/docs/pages/api-reference/components/link#scroll-1">🔗scroll 옵션</Link>을 제공합니다.
        <br />
        그렇다면 기본 Web 환경에서는 이를 어떻게 처리할 수 있을까요? Next.js에서는 어떻게 처리하는 걸까요?
        <br />
        |
        <br />
        간단합니다. <u>history 객체의 scrollRestoration 값</u>을 조작하고, a 태그를 클릭할 때의 스크롤 정보를 저장한 후에 페이지를 이동할 때에 스크롤 정보를 변경시켜주는 것입니다.
        <br />
        &nbsp;&nbsp;1. <Link href="https://developer.mozilla.org/ko/docs/Web/API/History/scrollRestoration">🔗history.scrollRestoration</Link> 정보를 ‘manual’ 값으로 변경합니다.
        <br />
        &nbsp;&nbsp;2. scroll 정보인 <u>window.scrollY 정보</u>를 sessionStorage에 저장합니다.
        <br />
        &nbsp;&nbsp;3. load 이벤트 리스너에 해당 정보를 scrollTo로 조작하는 함수를 선언한다. (+ sessionStorage 값을 초기화 합니다.)
      </div>
    ),
    pathUrl: "scroll-state-on-navigate-page",
    date: new Date("2024-06-06"),
  },
  {
    title: "Google page Indexing",
    content: (
      <div>
        <u>Page Indexing</u>
        <br />
        크롤러는 대량의 인덱스(페이지 위치와 모든 단어들)를 모아 정리하는 작업을
        수행합니다.
        <br />
        → 사용자의 query와 가장 적합하다고 도출된 페이지를 노출합니다.
        <br />
        <br />
        <u>Overview</u>
        <br />
        인덱싱이 되지 않는, 오류가 있는 페이지들은 구글 검색을 해도 나타나지
        않습니다. 이는 웹사이트가 트래픽에 많은 loss를 입었다는 뜻입니다.
        <br />
        &nbsp;&nbsp;- sitemap을 통해 제출한 페이지에 문제가 있을 때는 확실하게
        표시가 뜹니다. 이는 구글(봇)에서 해결해야 할 가능성이 높습니다.
        <br />
        &nbsp;&nbsp;- Valid with Warning :: 구글에서 인덱스 되었지만
        robots.txt에서 block 처리 당할 수 있습니다. → 이는 사용자가 막아서인지
        SE의 결과가 그런 것인지 알 수가 없습니다. → 페이지 인덱싱을 막고자
        함이라면, robots.txt가 아닌 no-index directive를 설정하는 등으로
        조작해야 합니다.
        <br />
        &nbsp;&nbsp;- Excluded :: no-index를 직접 설정했음에도 구글이 다른
        페이지의 복사본을 띄우거나, 바로 simply not found로 404 error를 띄울 수
        있습니다.
        <br />
        <br />
        <u>Not Indexed</u>
        <br />
        1. Duplicate without user-selected canonical
        <br />
        다른 페이지의 복제본으로, 기본 표준 페이지로 지정되어 있지 않은
        사유입니다. (canonical 설정이 되어있음에도 Google이 아니라고 판단되면,
        <u>Duplicate, Google chose different canonical than user</u> 사유가
        해당됩니다.)
        <br />
        두 페이지 간의 content가 충분히 다른지 확인이 필요합니다. (예를 들어
        ssr이 되지 않는 페이지는 전부가 같은 content로 인식될 것입니다.)
        그럼에도 다른 잘못된 url을 표준으로 선택했다면, 해당 페이지에 명시적으로
        표준을 표시할 수 있습니다.
        <br />
        2. Soft 404
        <br />
        soft 404 오류는 사용자에게 페이지가 존재하지 않는다고 알리는 페이지와
        200 (success) 상태 코드를 반환하는 URL입니다. 경우에 따라 주요 콘텐츠가
        없거나 페이지가 비어 있는 경우도 있습니다.
        <br />
        주로, `:id`의 동적인 router param을 설정할 때 일어나기 쉽습니다.
        <br />
        이는 사용자가 작동 중인 페이지라고 생각하지만 에러 메시지를 보게 되어
        좋지 않은 경험을 갖게 됩니다. 이는 페이지 검색에 제외됩니다.
        <br />
        Page Indexing 결과에서 제외시키기 위해서는 서버에서부터 판단하여 404
        Error를 반환해야 합니다.
        <br />
        <br />
        <u>canonical url</u>
        <br />
        같은 content로 보여주는 중복된 페이지들에 대해 canonical 페이지를 설정할
        수 있습니다.
        <br />
        → `/product?query=~` / `/post?like=true`
        <br />
        이를 통해 traffic/ranking에서 경쟁할 필요 없는 페이지들을 통합하여
        관리할 수 있습니다.
        <br />
        아래와 같은 다양한 방법들도 있습니다.
        <br />
        &nbsp;&nbsp;1. 301 redirect를 수행합니다. ([How to Make SEO and Paid
        Social Work Together to Drive Traffic and
        Revenue](https://www.shopify.com/partners/blog/social-seo).)
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;→ 사용자 경험에 문제를 주지 않는 다면 301,
        문제가 된다면 canincal로 처리할 수 있습니다.
        <br />
        &nbsp;&nbsp;2. URL Parameters 조작을 직접 설정합니다. (“없는 것처럼
        취급해주세요.“)
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;→ 이는 이제 Google 크롤러가 자동적으로
        Parameters를 판단하여 다룹니다.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;→ 하지만, canonical을 사용하는 것이 “방어적“으로
        하는 좋은 SEO 조치가 될 수 있습니다.
        <br />
        &nbsp;&nbsp;3. `#` 해시를 붙여 처리합니다. 이는 검색 엔진에 영향을 주지
        않고, 같은 canonicalized url을 나타냅니다.
        <br />
        SEO 전문가 Yoast는, 잘못된 페이지를 canonicalize 하는 것이, canonicalize
        하지 않는 것보다 항상 좋다고 말합니다. (
        <Link href="https://yoast.com/rel-canonical/#301-redirect-vs-canonical">
          🔗https://yoast.com/rel-canonical/#301-redirect-vs-canonical
        </Link>
        )
        <br />
        하지만 중복 콘텐츠의 경우 오래된 글, 제품 등을 `정리`하고 삭제하거나
        제거하려는 경향이 있습니다. 문제는 해당 콘텐츠가 다른 곳에서 링크되거나
        참조된 경우가 있다는 것입니다. 실수로 오래된 콘텐츠를 삭제하는 경우
        사용자 경험(UX)을 망치지 않고 개선하는 404 오류 페이지로 클라이언트를
        설정했는지 확인해야 합니다. 기억에 남는 최고의 404 페이지는 유머와
        강력한 UX를 적절히 조합한 페이지입니다.
        <br />
        <br />
        <u>noindex && nofollow</u>
        <br />-{" "}
        <Link href="https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=ko">
          🔗noindex example
        </Link>
        <br />-{" "}
        <Link href="https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=ko">
          🔗nofollow example
        </Link>
      </div>
    ),
    pathUrl: "google-page-indexing",
    date: new Date("2023-10-09"),
  },
].map((keyword) => ({
  ...keyword,
  category: "Web" as const,
}));

export { KEYWORDS };
