import { Code as SyntaxHighlight } from "bright";
import { FC } from "react";

import { PickNotionBlock } from "@/core/notion/types";

import { code } from "./index.css";

interface CodeProps {
  block: PickNotionBlock<"code">;
}
SyntaxHighlight.theme = "material-darker";

const Code: FC<CodeProps> = ({ block }) => {
  const codeContent = block.code.rich_text
    .map((text) => text.plain_text)
    .join("");

  return (
    <SyntaxHighlight
      lang={block.code.language}
      codeClassName={code}
      style={{ borderRadius: "8px" }}
      lineNumbers
    >
      {codeContent}
    </SyntaxHighlight>
  );
};

export default Code;
