import { FC } from 'react';

import { PickNotionBlock } from '@/core/notion/types';

import RichTextRenderer from '../../RichTextRenderer';
import { text } from './index.css';

interface Heading1Props {
  block: PickNotionBlock<'heading_1'>;
}

const Heading1: FC<Heading1Props> = ({ block }) => {
  return (
    <RichTextRenderer
      richText={block.heading_1.rich_text}
      render={(children) => (
        <h2 className={text}>{children}</h2>
      )}
    />
  );
};

export default Heading1;
