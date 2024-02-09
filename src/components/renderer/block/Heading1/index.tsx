import { FC } from 'react';

import { PickNotionBlock } from '@/core/notion/types';

import RichTextRenderer from '../../RichTextRenderer';
import Heading from '@/components/Heading';
import { text } from './index.css';

interface Heading1Props {
  block: PickNotionBlock<'heading_1'>;
}

const Heading1: FC<Heading1Props> = ({ block }) => {
  return (
    <RichTextRenderer
      richText={block.heading_1.rich_text}
      render={(children) => (
        <Heading as="h2" size='title-l' weight='semiBold' className={text}>{children}</Heading>
      )}
    />
  );
};

export default Heading1;
