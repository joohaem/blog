import { FC } from 'react';

import { PickNotionBlock } from '@/core/notion/types';

import RichTextRenderer from '../../RichTextRenderer';
import { text } from './index.css';
import Heading from '@/components/Heading';

interface Heading3Props {
  block: PickNotionBlock<'heading_3'>;
}

const Heading3: FC<Heading3Props> = ({ block }) => {
  return (
    <RichTextRenderer
      richText={block.heading_3.rich_text}
      render={(children) => (
        <Heading as='h4' weight='semiBold' className={text}>{children}</Heading>
      )}
    />
  );
};

export default Heading3;
