import { FC } from 'react';

import { NotionBlock } from '@/core/notion/request';

import {
  Callout,
  Heading1,
  Heading2,
  Heading3,
  ImageBlock,
  NumberedListItem,
  Paragraph,
  Quote,
  Code,
  BulletListItem,
  Divider
} from '../block'
import { blocksContainer, container } from './index.css';

interface BlockRendererProps {
  blocks: NotionBlock[];
}

export const BlockRenderer: FC<BlockRendererProps> = ({ blocks }) => {
  const merged = mergeBlocks(blocks);

  return (
    <div className={container}>
      {merged.map((blockOrArray, idx) => {
        if (Array.isArray(blockOrArray)) {
          return (
            <div key={idx} className={blocksContainer}>
              {blockOrArray.map((block, idx) => (
                <BlockResolver key={idx} block={block} position={idx + 1} />
              ))}
            </div>
          );
        }
        return <BlockResolver key={idx} block={blockOrArray} position={idx + 1} />;
      })}
    </div>
  );
};

function BlockResolver({ block, position }: { block: NotionBlock; position: number }) {
  switch (block.type) {
    case 'paragraph':
      return <Paragraph block={block} />;
    case 'heading_1':
      return <Heading1 block={block} />;
    case 'heading_2':
      return <Heading2 block={block} />;
    case 'heading_3':
      return <Heading3 block={block} />;
    case 'bulleted_list_item':
      return <BulletListItem block={block} />;
    case 'numbered_list_item':
      return <NumberedListItem block={block} num={position} />;
    case 'code':
      return <Code block={block} />;
    case 'image':
      return <ImageBlock block={block} />;
    case 'quote':
      return <Quote block={block} />;
    case 'callout':
      return <Callout block={block} />;
    case 'divider':
      return <Divider />;
    default:
      const type = block.type;
      const content = block[type as never];
      return (
        <div style={{ whiteSpace: 'pre-wrap' }}>
          Unknown {type}: {JSON.stringify(content, null, 2)}
        </div>
      );
  }
}

function mergeBlocks(blocks: NotionBlock[]) {
  const result: (NotionBlock[] | NotionBlock)[] = [];
  let buffer: NotionBlock[] = [];

  for (const block of blocks) {
    if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
      buffer.push(block);
      continue;
    }

    if (buffer.length > 0) {
      result.push(buffer);
      buffer = [];
    }

    result.push(block);
  }

  return result;
}
