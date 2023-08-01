import React from "react";
import { useDispatch, useSelector } from "react-redux";

// IN PROGRESS
export function CodeblockFilter() {
  const dispatch = useDispatch();
  const filterBy = useSelector((storeState) => storeState.filterBy);

  return <div className="codeblock-filter"></div>;
}
