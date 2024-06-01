import React from "react";

import KeywordPageModal from "@/components/KeywordPageModal";
import { KEYWORDS } from "@/consts/keywords";

interface KeywordProps {
  params: {
    path: string;
  };
}

export async function generateStaticParams() {
  return KEYWORDS.map((keyword) => ({
    path: keyword.pathUrl,
  }));
}

// TODO :: SEO setting
export default function Keyword({ params: { path } }: KeywordProps) {
  const keyword = KEYWORDS.find((keyword) => keyword.pathUrl === path);

  if (!keyword) {
    throw new Error("Invalid keyword url.");
  }

  return <KeywordPageModal keyword={keyword} />;
}