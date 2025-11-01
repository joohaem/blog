"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  url: string;
}

export function Redirect({ url }: Props) {
  const router = useRouter();
  useEffect(() => {
    router.replace(url);
  }, [url, router]);

  return null;
}
