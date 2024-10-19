const deleteCharacter = (string, index) => {
  const newString = [...string];
  newString.splice(index, 1);
  return newString;
};

export { deleteCharacter };
