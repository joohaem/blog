import Link from "next/link";

const KEYWORDS = [
  {
    title: "keyof type",
    content: (
      <div>
        keyof 연산자는 object 타입을 받아 key 값들에 대한 string 이나 numeric
        literal의 union을 제공합니다.
        <br />
        <br />
        ```
        <br />
        keyof ({`{ [n: number]: unknwon }`})
        <br />
        {`// => string | number`}
        <br />
        ```
        <br />
        <br />
        하지만 위와 같이 string으로써 key를 설정한 index signature 타입이지만,
        number 타입이 유니온으로써 추론됩니다.
        <br />
        그 이유는 JavaScript에서 number 타입의 값도 string으로 강제 할당되기
        때문입니다. key 값으로 number 타입의 데이터가 기대가 되기 때문에
        TypeScript에서도 그에 맞는 타입(string | number)을 제공합니다.
        <br />
        <br />
        이는{" "}
        <Link href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#support-number-and-symbol-named-properties-with-keyof-and-mapped-types">
          🔗2.9 Released
        </Link>{" "}
        에서 string에 더불어 number와 symbol 타입까지 지원하게 되었습니다 (keyof
        and mapped types). 그 이유는 JavaScript에서 number와 symbol 타입의 key를
        지원하기 때문이었습니다.
        <br />
        | Given an object type `X`, `keyof X` is resolved as follows:
        <br />
        &nbsp;&nbsp;- If `X` contains a string index signature, `keyof X` is a
        union of `string`, `number`, and the literal types representing
        symbol-like properties, otherwise
        <br />
        &nbsp;&nbsp;- If `X` contains a numeric index signature, `keyof X` is a
        union of `number` and the literal types representing string-like and
        symbol-like properties, otherwise
        <br />
        &nbsp;&nbsp;- `keyof X` is a union of the literal types representing
        string-like, number-like, and symbol-like properties.
        <br />
        중복적인 타입 정의로 인해 여러 타입을 제공하는 것은 타입 추론에 있어
        불편함이 있을 수 있습니다.
        <br />
        이 이슈는, 2.9 ㄲeleased 문서에서 breaking change로 소개된 내용이기도
        합니다.
        <br />
        | This is a breaking change; previously, the `keyof` operator and mapped
        types only supported `string` named properties. Code that assumed values
        typed with `keyof T` were always `string`s, will now be flagged as
        error.
        <br />
        <br />
        그래서 문제점을 해결하기 위해 여러 방법이 대두됩니다.
        <br />
        &nbsp;&nbsp;1. 선언단에서, keyof와 함께 string을 intersection 하여
        string의 key 타입만을 선언할 수 있습니다. (
        <u>keyof ExampleKeys & string</u>)
        <br />
        &nbsp;&nbsp;2. string의 타입을 선언하게끔 유틸리티 타입을 활용할 수
        있습니다. (<u>{`Extract<keyof ExampleKeys, string>`}</u>)
        <br />
        &nbsp;&nbsp;3. keyof 타입을 string으로 강제하기 위한 tsconfig 옵션{" "}
        <Link href="https://www.typescriptlang.org/tsconfig/#keyofStringsOnly">
          🔗keyofStringsOnly
        </Link>
        을 지원하기도 합니다. 이를 활용할 수 있습니다.
        <br />
        하지만 이 속성은{" "}
        <Link href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#deprecations-and-default-changes">
          🔗TypeScript 5.0 Released
        </Link>{" "}
        에서 Deprecated 되는 속성입니다. 아마 numeric한 타입을 지원하는 것이
        정확하고 자연스러운 타입이라고 의미하는 듯 합니다.
        <br />
        <br />
        Ref
        <br />
        &nbsp;&nbsp;-{" "}
        <Link href="https://www.typescriptlang.org/docs/handbook/literal-types.html#numeric-literal-types">
          🔗https://www.typescriptlang.org/docs/handbook/literal-types.html#numeric-literal-types
        </Link>
      </div>
    ),
    pathUrl: "keyof-type",
    date: new Date("2024-01-13"),
  },
].map((keyword) => ({
  ...keyword,
  category: "TypeScript" as const,
}));

export { KEYWORDS };
