import { FC } from "react";

import Heading from "@/components/Heading";
import { PickNotionBlock } from "@/core/notion/types";

import RichTextRenderer from "../../RichTextRenderer";
import { text } from "./index.css";

interface Heading2Props {
  block: PickNotionBlock<"heading_2">;
}

const Heading2: FC<Heading2Props> = ({ block }) => {
  return (
    <RichTextRenderer
      richText={block.heading_2.rich_text}
      render={(children) => (
        <Heading as="h3" weight="semiBold" className={text}>
          {children}
        </Heading>
      )}
    />
  );
};

export default Heading2;
