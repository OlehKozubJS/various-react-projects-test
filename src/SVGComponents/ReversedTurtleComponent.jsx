import { getXYbyAngle } from "./angleFunctions";

import { LineComponent } from "./LineComponent";

const ReversedTurtleComponent = ({
  x,
  y,
  turn,
  backgroundColor,
  borderColor,
}) => {
  return (
    <LineComponent
      points={[
        ...getXYbyAngle(x, y, 100, -15 + turn),
        ...getXYbyAngle(x, y, 0, turn),
        ...getXYbyAngle(x, y, 100, 15 + turn),
        ...getXYbyAngle(x, y, 100, -15 + turn),
      ]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    />
  );
};

export { ReversedTurtleComponent };
