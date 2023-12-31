import { httpService } from "./http.service.js";

export const codeblockService = {
  query,
  getById,
  remove,
  save,
  getEmptyCodeblock,
  getNextCodeblockId,
  getDifficultyColor,
};

// FILTER IN PROGRESS
async function query(filterBy = null) {
  const codeblocks = await httpService.get(`codeblock/`,filterBy);
  return codeblocks;
}

async function getById(id) {
  const codeblocks = await query();
  const codeblock = codeblocks.find((codeblock) => codeblock._id === id);
  return Promise.resolve({ ...codeblock });
}

// IN PROGRESS
function remove(codeblockId) {
  return httpService.remove(`codeblock/${codeblockId}`);
}

function _update(codeblock) {
  return httpService.put(`codeblock/${codeblock._id}`, codeblock);
}

// IN PROGRESS
function _add(codeblock) {
  return httpService.post(`codeblock/`, codeblock);
}

function save(codeblock) {
  return codeblock._id ? _update(codeblock) : _add(codeblock);
}

function getEmptyCodeblock() {
  return {
    title: "",
    difficulty: "",
    code:"",
    solution: "",
    explanation: ""
  };
}

async function getNextCodeblockId(id) {
  const codeblocks = await query();
  const codeblock = codeblocks.find((codeblock) => codeblock._id === id);
  const currentIdx = codeblocks.indexOf(codeblock);
  if (currentIdx !== -1 && currentIdx < codeblocks.length - 1) {
    return codeblocks[currentIdx + 1]._id;
  }
  return null;
}

export function getDifficultyColor(difficulty) {
  if (difficulty === "Easy") return "#15bd66";
  if (difficulty === "Medium") return "#ffb800";
  if (difficulty === "Hard") return "#ff334b";
  return "#000000";
}
