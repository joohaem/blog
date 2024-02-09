import { FC } from 'react';

import { PickNotionBlock } from '@/core/notion/types';

import RichTextRenderer from '../../RichTextRenderer';
import { container } from './index.css';
import Text from '@/components/Text';

interface CalloutProps {
  block: PickNotionBlock<'callout'>;
}

const Callout: FC<CalloutProps> = ({ block }) => {
  return (
    <RichTextRenderer
      richText={block.callout.rich_text}
      render={(children) => (
        <div className={container}>
          <Text>{children}</Text>
        </div>
      )}
    />
  );
};

export default Callout;
