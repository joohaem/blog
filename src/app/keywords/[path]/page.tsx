"use client";

import { useRouter } from "next/navigation";
import React from "react";

import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import Text from "@/components/Text";

import { container, content, divider, title } from "./page.css";

export default function Keyword() {
  const router = useRouter();
  return (
    <Modal
      isOpen
      onClose={() => {
        router.push("/keywords");
      }}
      className={container}
    >
      <Heading size="title-m" weight="medium" className={title}>
        :Title
      </Heading>
      <div className={divider}></div>
      <Text size="s" className={content}>
        :Content
      </Text>
    </Modal>
  );
}
