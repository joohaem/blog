"use client";

import { useRouter } from "next/navigation";
import React from "react";

import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import Text from "@/components/Text";
import type { Keyword } from "@/consts/keywords";

import { container, content, date, divider, title } from "./index.css";

interface KeywordProps {
  keyword: Keyword;
}

export default function KeywordPageModal({ keyword }: KeywordProps) {
  const router = useRouter();
  return (
    <Modal
      isOpen
      onClose={() => {
        router.push("/keywords", { scroll: false });
      }}
      className={container}
    >
      <Heading size="title-m" weight="medium" className={title}>
        {keyword?.title}
      </Heading>
      <div className={divider} />
      <Text size="s" className={content}>
        {keyword?.content}
        <div className={date}>
          Last Updated {keyword.date.toLocaleDateString("ko-KR")}
        </div>
      </Text>
    </Modal>
  );
}
