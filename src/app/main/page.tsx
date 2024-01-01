import Header from "@/components/Header";
import { container } from "./page.css";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <div className={container}>Main</div>
      </main>
    </>
  );
}
