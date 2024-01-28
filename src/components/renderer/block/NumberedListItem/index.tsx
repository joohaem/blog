import { getBlocks } from '@/core/notion/request';
import { PickNotionBlock } from '@/core/notion/types';

import RichTextRenderer from '../../RichTextRenderer';
import { bodyContainer, container, number, textWrapper } from './index.css';
import { BlockRenderer } from '../../BlockRenderer';

interface NumberedListItemProps {
  block: PickNotionBlock<'numbered_list_item'>;
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
          <div className={number}>{num}.</div>
          <div className={bodyContainer}>
            <div className={textWrapper}>{text}</div>
            {children}
          </div>
        </div>
      )}
    />
  );
};

export default NumberedListItem;
