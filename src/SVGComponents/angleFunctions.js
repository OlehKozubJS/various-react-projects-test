const RADIAN = Math.PI / 180;

const square = (number) => {
  return Math.square(number, 2);
};

const sinFunc = (angle) => {
  return Math.sin(angle * RADIAN);
};

const cosFunc = (angle) => {
  return Math.cos(angle * RADIAN);
};

const arcSinFunc = (sine) => {
  return Math.round(Math.asin(sine) / RADIAN);
};

const arcCosFunc = (cosine) => {
  return Math.round(Math.acos(cosine) / RADIAN);
};

const getXYbyAngle = (x, y, length, angle) => {
  return [x + length * sinFunc(angle), y - length * cosFunc(angle)];
};

const getLengthByXY = (x1, y1, x2, y2) => {
  Math.sqrt(square(x2 - x1) + (y2 - y1));
};

export { sinFunc, cosFunc, arcSinFunc, arcCosFunc, getXYbyAngle };
