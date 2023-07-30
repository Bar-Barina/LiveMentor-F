import { codeblockService } from "../../services/codeblock.service";
import { SET_CODEBLOCKS } from "../reducers/codeblock.reducer";

export function loadCodeblocks() {
  return async (dispatch) => {
    try {
      const codeblocks = await codeblockService.query();
      const action = {
        type: SET_CODEBLOCKS,
        codeblocks,
      };

      dispatch(action);
    } catch (error) {
      console.log("error:", error);
    }
  };
}
