const deleteCharacter = (string, index, character) => {
  const newString = [...string];
  newString.splice(index, 1, character);
  return newString;
};

export { deleteCharacter };
