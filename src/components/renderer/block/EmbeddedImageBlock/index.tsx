import Image from "next/image"

import { PickNotionBlock } from '@/core/notion/types';
import { image, imageWrapper } from "./index.css";

interface EmbeddedImageBlockProps {
  block: PickNotionBlock<'embed'>;
}

const EmbeddedImageBlock = ({ block }: EmbeddedImageBlockProps) => {
  return (
    <div className={imageWrapper}>
      <Image
        src={block.embed.url}
        alt={block.embed?.caption.map((text) => text.plain_text).join('') ?? 'Article Image'}
        fill
        className={image}
      />
    </div>
  );
};

export default EmbeddedImageBlock;
