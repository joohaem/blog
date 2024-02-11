"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/about")
  }, [router]);

  return <Header />;
}
