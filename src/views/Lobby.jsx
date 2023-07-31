import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CodeblockList } from "../components/CodeblockList";
import { loadCodeblocks } from "../store/actions/codeblock.actions";
import { Loader } from '../components/Loader'

export function Lobby(props) {
  const codeblocks = useSelector(
    (storeState) => storeState.codeblocks
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCodeblocks());
  }, []);

  if (!codeblocks) return  <Loader />

  return (
    <section className="codeblock-index">
      <h1 className="lobby-title">Choose code block</h1>
      <CodeblockList codeblocks={codeblocks} />
    </section>
  );
}
