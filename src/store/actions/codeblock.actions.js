import { codeblockService } from "../../services/codeblock.service";
import { SET_CODEBLOCKS, REMOVE_CODEBLOCK, ADD_CODEBLOCK, UPDATE_CODEBLOCK, SET_FILTER_BY } from "../reducers/codeblock.reducer";

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

export function remove(codeblockId) {
  return async (dispatch) => {
    try {
      await codeblockService.remove(codeblockId);
      const action = { type: REMOVE_CODEBLOCK, codeblockId };
      dispatch(action);
      // showSuccessMsg(`Removed successfully`);
      return "Removed!";
    } catch (error) {
      // showErrorMsg(`Something went wrong`);
      console.log("error:", error);
    }
  };
}

export function save(codeblock) {
  return async (dispatch) => {
    try {
      const type = codeblock._id ? UPDATE_CODEBLOCK : ADD_CODEBLOCK;
      const newCodeblock = await codeblockService.save(codeblock);
      const action = { type, codeblock: newCodeblock };
      dispatch(action);
      // showSuccessMsg(`codeblock ${type}ed successfully`);
      return "Removed!";
    } catch (error) {
      // showErrorMsg(`Something went wrong`);
      console.log("error:", error);
    }
  };
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: SET_FILTER_BY, filterBy });
  };
}
