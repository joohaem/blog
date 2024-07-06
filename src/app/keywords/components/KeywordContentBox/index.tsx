"use client";

import Link from "next/link";
import React from "react";

import Heading from "@/components/Heading";
import Label from "@/components/Label";
import { Keyword } from "@/consts/keywords";

import { contentCategory, contentItem } from "./index.css";

interface KeywordContentBoxProps extends Keyword {}

export default function KeywordContentBox({
  title,
  category,
  pathUrl,
}: KeywordContentBoxProps) {
  return (
    <Link className={contentItem} href={`/keywords/${pathUrl}`} scroll={false}>
      <Heading size="title-xs" weight="medium">
        {title}
      </Heading>
      <Label size="m" className={contentCategory}>
        {category}
      </Label>
    </Link>
  );
}
