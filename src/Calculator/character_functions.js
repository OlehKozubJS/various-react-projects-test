const spliceCharacter = (string, index, type, newCharacter) => {
  const newString = [...string];
  newString.splice(index, type, newCharacter);
  return newString.join("");
};

const insertCharacter = (string, index, newCharacter) => {
  return spliceCharacter(string, index, 0, newCharacter);
};
const deleteCharacter = (string, index) => {
  return spliceCharacter(string, index, 1, "");
};
const replaceCharacter = (string, index, newCharacter) => {
  return spliceCharacter(string, index, 1, newCharacter);
};

export { insertCharacter, deleteCharacter, replaceCharacter };
