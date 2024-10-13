import { getXYbyAngle } from "./angleFunctions";

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
      points={[x, y, getXYbyAngle(x, y, length, angle)]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    />
  );
};

export { RadiantLineComponent };
