import { LineComponent } from "./LineComponent";

const RadiantLineComponent = ({
  x,
  y,
  length,
  angle,
  backgroundColor,
  borderColor,
}) => {
  const sinFunc = (angle) => {
    return Math.sin((Math.PI / 180) * angle);
  };

  const cosFunc = (angle) => {
    return Math.cos((Math.PI / 180) * angle);
  };

  function angleFunction(x, y, length, angle) {
    return [x + length * cosFunc(angle), y + length * sinFunc(angle)];
  }

  return (
    <LineComponent
      points={[
        x,
        y,
        angleFunction(x, y, length, angle)[0],
        angleFunction(x, y, length, angle)[1],
      ]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    />
  );
};

export { RadiantLineComponent };
