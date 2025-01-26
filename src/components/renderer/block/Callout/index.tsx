import { FC } from "react";

import Text from "@/components/Text";
import { PickNotionBlock } from "@/core/notion/types";

import RichTextRenderer from "../../RichTextRenderer";
import { container } from "./index.css";

interface CalloutProps {
  block: PickNotionBlock<"callout">;
}

const Callout: FC<CalloutProps> = ({ block }) => {
  return (
    <RichTextRenderer
      richText={block.callout.rich_text}
      render={(children) => (
        <div className={container}>
          <Text>
            <p>{children}</p>
          </Text>
        </div>
      )}
    />
  );
};

export default Callout;
