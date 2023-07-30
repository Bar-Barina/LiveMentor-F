import { httpService } from "./http.service.js";

export const codeblockService = {
  query,
  getById,
  getNextCodeblockId,
  getDifficultyColor
};

async function query() {
  const codeblocks = await httpService.get(`codeblock`);
  return codeblocks;
}

async function getById(id) {
  const codeblocks = await query();
  const codeblock = codeblocks.find((codeblock) => codeblock._id === id);
  return Promise.resolve({ ...codeblock });
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