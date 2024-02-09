"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import About from "./about/page";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/about")
  }, [router]);

  return <About />;
}
