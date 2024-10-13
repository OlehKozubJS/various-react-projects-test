const RADIAN = Math.PI / 180;

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

export { sinFunc, cosFunc, arcSinFunc, arcCosFunc, getXYbyAngle };
