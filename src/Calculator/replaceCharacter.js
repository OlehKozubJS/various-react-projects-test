const replaceCharacter = (string, index, newCharacter) => {
  const newString = [...string];
  newString.splice(index, 0, newCharacter);
  return newString.join("");
};

export { replaceCharacter };
