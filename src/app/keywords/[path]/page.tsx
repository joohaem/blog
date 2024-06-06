import { Metadata, ResolvingMetadata } from "next";
import React from "react";

import { KEYWORDS } from "@/consts/keywords";

import KeywordPageModal from "../components/KeywordPageModal";

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

export async function generateMetadata(
  { params }: KeywordProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const pathUrl = params.path;
  const keyword = KEYWORDS.find((keyword) => keyword.pathUrl === pathUrl);

  if (!keyword) {
    throw new Error("Invalid keyword url.");
  }

  return {
    title: `${keyword.title} | SNUPI Blog`,
    description: "SNUPI Blog",
    keywords: [
      "snupi",
      "joohaem",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "GraphQL",
      "HTML",
    ],
    openGraph: {
      title: `${keyword.title} | SNUPI Blog`,
      description: `${keyword.content}`,
      type: "article",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function Keyword({ params: { path } }: KeywordProps) {
  const keyword = KEYWORDS.find((keyword) => keyword.pathUrl === path);

  if (!keyword) {
    throw new Error("Invalid keyword url.");
  }

  return <KeywordPageModal keyword={keyword} />;
}
