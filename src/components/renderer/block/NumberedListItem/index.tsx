import Text from "@/components/Text";
import { getBlocks } from "@/core/notion/request";
import { PickNotionBlock } from "@/core/notion/types";

import { BlockRenderer } from "../../BlockRenderer";
import RichTextRenderer from "../../RichTextRenderer";
import { bodyContainer, container, number } from "./index.css";

interface NumberedListItemProps {
  block: PickNotionBlock<"numbered_list_item">;
  num: number;
}

const NumberedListItem = async ({ block, num }: NumberedListItemProps) => {
  const children = await (async () => {
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return <BlockRenderer blocks={children} />;
    }
    return null;
  })();

  return (
    <RichTextRenderer
      richText={block.numbered_list_item.rich_text}
      render={(text) => (
        <div className={container}>
          <Text className={number}>{num}.</Text>
          <div className={bodyContainer}>
            <Text>
              <p>{text}</p>
            </Text>
            {children}
          </div>
        </div>
      )}
    />
  );
};

export default NumberedListItem;
