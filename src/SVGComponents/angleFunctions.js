const sinFunc = (angle) => {
  return Math.sin((Math.PI / 180) * angle);
};

const cosFunc = (angle) => {
  return Math.cos((Math.PI / 180) * angle);
};

const angleFunction = (x, y, length, angle) => {
  return [x + length * cosFunc(angle), y + length * sinFunc(angle)];
};

export { sinFunc, cosFunc, angleFunction };
