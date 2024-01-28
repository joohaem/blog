import BaseImage from "next/image"

import { PickNotionBlock } from '@/core/notion/types';
import { imageWrapper } from "./index.css";

interface ImageProps {
  block: PickNotionBlock<'image'>;
}

const Image = ({ block }: ImageProps) => {
  const url = (() => {
    if (block.image.type === 'file') {
      return block.image.file.url;
    } else if (block.image.type === 'external') {
      return block.image.external.url;
    }
    throw new Error('Invalid image type');
  })();

  return (
    <div className={imageWrapper}>
      <BaseImage
        src={url}
        alt={block.image.caption.map((text) => text.plain_text).join('') ?? 'Article Image'}
        fill
        objectFit="contain"
      />
    </div>
  );
};

export default Image;
