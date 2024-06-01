import Link from "next/link";

const KEYWORDS = [
  {
    title: "<br>",
    content: (
      <div>
        다양한 브라우저에서 호환은 가능하다.
        <br />
        단지 “줄바꿈”의 의미이며, empty element이다. (그래서 닫는 태그 x)
        <br />
        <br />
        css와 상충된다. 스타일링을 하기에 까다롭다.
        <br />
        접근성 측면에서도 좋지 않다. 이어진 텍스트로 읽히지만, visual ui는
        줄바꿈으로 표시된다. (→ 시멘틱 태그로 대체되어야 한다.)
        <br />
        <br />
        정말 plain한 텍스트 내에서 비주얼적으로만 줄바꿈을 원한다면, br 태그를
        사용함이 맞다.
        <br />
        그러나 br 태그도, 그러한 상황도 매우 특수한 case이다.
        <br />
        대부분은 css block으로써 줄바꿈을 해결한다.
      </div>
    ),
    pathUrl: "html-br",
    date: new Date("2023-09-20"),
  },
].map((keyword) => ({
  ...keyword,
  category: "HTML" as const,
}));

export { KEYWORDS };
