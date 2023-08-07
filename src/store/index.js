import thunk from "redux-thunk";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { codeblockReducer } from "./reducers/codeblock.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  codeblockReducer,
  composeEnhancers(applyMiddleware(thunk))
);

window.gStore = store;
