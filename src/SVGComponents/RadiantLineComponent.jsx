import { angleFunction } from "./angleFunctions";

import { LineComponent } from "./LineComponent";

const RadiantLineComponent = ({
  x,
  y,
  length,
  angle,
  backgroundColor,
  borderColor,
}) => {
  return (
    <LineComponent
      points={[x, y, angleFunction(x, y, length, angle)]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    />
  );
};

export { RadiantLineComponent };
