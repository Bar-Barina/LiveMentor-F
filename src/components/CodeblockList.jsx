import { memo } from "react";
import { CodeblockPreview } from "./CodeblockPreview";

function _CodeblockList({ codeblocks, onRemoveCodeblock }) {
  return (
    <section className="codeblock-list">
      <div className="list-title">Code Blocks</div>
      {codeblocks.map((codeblock, index) => (
        <CodeblockPreview
          key={codeblock._id}
          codeblock={codeblock}
          index={index + 1}
          onRemoveCodeblock={onRemoveCodeblock}
          // Passing the index to display it in the codeblock preview
        />
      ))}
    </section>
  );
}

export const CodeblockList = memo(_CodeblockList);
