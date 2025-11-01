import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import { Redirect } from "@/components/Redirect";

export default function Home() {
  return (
    <>
      <Header />
      <PageTitle title="WELCOME" />

      <Redirect url="/about" />
    </>
  );
}
