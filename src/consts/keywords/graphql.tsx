import Link from "next/link";

const KEYWORDS = [
  {
    title: "graphql ...spread",
    content: (
      <div>
        It`s a powerful way to structure your queries efficiently and retrieve
        only the data relevant to the specific types. (Using with Interfaces(1),
        Unions(2), Fragments(3))
      </div>
    ),
    pathUrl: "graphql-spread",
    date: new Date("2023-10-20"),
  },
  {
    title: "Login logic (GraphQL? REST API?)",
    content: (
      <div>
        데이터 자원 자체를 주고 받는 로그인 로직은, gql 보다 rest 가 더
        적합하다.
        <br />
        만약 gql로 구현할 경우, 로그인을 하여 viewer가 정해지면 그에 다른
        데이터들을 모두 업데이트 해줘야 하게 된다.
        <br />
        로그인을 해도 이전 viewer의 데이터로 업데이트가 덜 되는 상황을 방지하기
        위해, 아예 Layer를 나누어, 로그인 정보는 REST로 구현하고 그에 따른
        정보를 보여주는 방식으로 구현한다.
        <br />
        <br />
        또한, 로그인에 필요한 Redirecting 로직은 프론트 서버에서 진행한다.
        <br />
        app, admin 과 같이 서비스의 종류들이 다양해진다면, 그에 따른 로직 분리를
        서버에서 가져가게 된다.
        <br />
        하지만 이는 프론트에 종속된 로직이기 때문에, 프론트 서버에서 조작하여
        REST 통신을 하게 되면 알맞은 계층 분리가 된다.
      </div>
    ),
    pathUrl: "login-logic",
    date: new Date("2023-10-09"),
  },
].map((keyword) => ({
  ...keyword,
  category: "GraphQL" as const,
}));

export { KEYWORDS };
