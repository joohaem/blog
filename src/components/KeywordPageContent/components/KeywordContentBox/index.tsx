"use client";

import Link from "next/link";
import React, { useState } from "react";

import Heading from "@/components/Heading";
import Label from "@/components/Label";
import Modal from "@/components/Modal";
import { Keyword } from "@/consts/keywords";

import { contentCategory, contentItem } from "./index.css";

interface KeywordContentBoxProps {
  title: Keyword["title"];
  category: Keyword["category"];
  content: Keyword["content"];
  pathUrl: Keyword["pathUrl"];
}

export default function KeywordContentBox({
  title,
  category,
  content,
  pathUrl,
}: KeywordContentBoxProps) {
  return (
    <Link className={contentItem} href={`/keywords/${pathUrl}`}>
      <Heading size="title-xs" weight="medium">
        {title}
      </Heading>
      <Label size="m" className={contentCategory}>
        {category}
      </Label>
    </Link>
  );
}
