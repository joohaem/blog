import React from "react";

import Heading from "@/components/Heading";
import Label from "@/components/Label";
import { Keyword } from "@/consts/keywords";

import { contentCategory, contentItem } from "./index.css";

interface KeywordContentBoxProps {
  title: Keyword["title"];
  category: Keyword["category"];
  content: Keyword["content"];
}

export default function KeywordContentBox({
  title,
  category,
  content,
}: KeywordContentBoxProps) {
  return (
    <div className={contentItem}>
      <Heading size="title-xs" weight="medium">
        {title}
      </Heading>
      <Label size="m" className={contentCategory}>
        {category}
      </Label>
    </div>
  );
}
