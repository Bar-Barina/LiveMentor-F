import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CodeblockList } from "../components/CodeblockList";
import { loadCodeblocks, remove } from "../store/actions/codeblock.actions";
import { Loader } from "../components/Loader";
import { CodeblockFilter } from "../components/CodeblockFilter";

export function Lobby(props) {
  const codeblocks = useSelector((storeState) => storeState.codeblocks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCodeblocks());
  }, []);

  function onRemoveCodeblock(productId) {
    dispatch(remove(productId));
    dispatch(loadCodeblocks());
  }

  if (!codeblocks) return <Loader />;

  return (
    <section className="codeblock-index">
      <h1 className="lobby-title">Choose code block</h1>
      <CodeblockFilter/>
      <CodeblockList
        codeblocks={codeblocks}
        // REMOVE IN PROGRESS
        onRemoveCodeblock={onRemoveCodeblock}
      />
    </section>
  );
}
