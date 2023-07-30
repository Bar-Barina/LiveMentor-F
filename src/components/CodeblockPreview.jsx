import React from "react";
import { Link } from "react-router-dom";
import { getDifficultyColor } from "../services/codeblock.service";

export function CodeblockPreview({ codeblock, index }) {
  
  const difficultyColor = getDifficultyColor(codeblock.difficulty);

  return (
    <Link to={`/codeblock/${codeblock._id}`}>
      <article className="codeblock-preview pointer">
        <div className="codeblock-index-title flex">
          <span className="codeblock-index"># {index}</span>
          <span className="title">{codeblock.title}</span>
        </div>
        <span style={{ color: difficultyColor }}>{codeblock.difficulty}</span>
      </article>
    </Link>
  );
}
