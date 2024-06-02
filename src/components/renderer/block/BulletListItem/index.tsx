import Text from "@/components/Text";
import { getBlocks } from "@/core/notion/request";
import { PickNotionBlock } from "@/core/notion/types";

import { BlockRenderer } from "../../BlockRenderer";
import RichTextRenderer from "../../RichTextRenderer";
import { bodyContainer, bullet, container } from "./index.css";

interface BulletListItemProps {
  block: PickNotionBlock<"bulleted_list_item">;
}

const BulletListItem = async ({ block }: BulletListItemProps) => {
  const children = await (async () => {
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return <BlockRenderer blocks={children} />;
    }
    return null;
  })();

  return (
    <RichTextRenderer
      richText={block.bulleted_list_item.rich_text}
      render={(text) => (
        <div className={container}>
          <Text className={bullet}>•</Text>
          <div className={bodyContainer}>
            <Text>{text}</Text>
            {children}
          </div>
        </div>
      )}
    />
  );
};

export default BulletListItem;
