export const SET_CODEBLOCKS = "SET_CODEBLOCKS";

const INITIAL_STATE = {
  codeblocks: null,
};

export function codeblockReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_CODEBLOCKS:
      return {
        ...state,
        codeblocks: action.codeblocks,
      };
    default:
      return state;
  }
}
