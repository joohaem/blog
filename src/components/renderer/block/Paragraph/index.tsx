import { FC } from 'react';

import { PickNotionBlock } from '@/core/notion/types';

import RichTextRenderer from '../../RichTextRenderer';
import { text } from './index.css';

interface ParagraphProps {
  block: PickNotionBlock<'paragraph'>;
}

const Paragraph: FC<ParagraphProps> = ({ block }) => {
  return (
    <RichTextRenderer
      richText={block.paragraph.rich_text}
      render={(children) => (
        <p className={text}>{children}</p>
      )}
    />
  );
};

export default Paragraph;
