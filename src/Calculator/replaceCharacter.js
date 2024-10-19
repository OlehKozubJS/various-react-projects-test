const replaceCharacter = (string, index, newCharacter) => {
  const newString = [...string];
  newString.splice(index, 1, newCharacter);
  return newString.join("");
};

export { replaceCharacter };
