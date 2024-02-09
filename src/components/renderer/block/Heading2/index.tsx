import { FC } from 'react';

import { PickNotionBlock } from '@/core/notion/types';

import RichTextRenderer from '../../RichTextRenderer';
import { text } from './index.css';
import Heading from '@/components/Heading';

interface Heading2Props {
  block: PickNotionBlock<'heading_2'>;
}

const Heading2: FC<Heading2Props> = ({ block }) => {
  return (
    <RichTextRenderer
      richText={block.heading_2.rich_text}
      render={(children) => (
        <Heading as='h3' size='title-l' weight='semiBold' className={text}>{children}</Heading >
      )}
    />
  );
};

export default Heading2;
