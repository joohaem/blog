import { FC } from "react";

import Text from "@/components/Text";
import { PickNotionBlock } from "@/core/notion/types";

import RichTextRenderer from "../../RichTextRenderer";

interface ParagraphProps {
  block: PickNotionBlock<"paragraph">;
}

const Paragraph: FC<ParagraphProps> = ({ block }) => {
  return (
    <RichTextRenderer
      richText={block.paragraph.rich_text}
      render={(children) => (
        <Text>
          <p>{children}</p>
        </Text>
      )}
    />
  );
};

export default Paragraph;
