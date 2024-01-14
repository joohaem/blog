import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import { getArticles } from "@/blog";

export default async function Articles() {
  const articles = (await getArticles()).filter((article) => article.publish);
  return (
    <>
      <Header />
      <PageTitle title="My Keywords" />
      page
    </>
  );
}
