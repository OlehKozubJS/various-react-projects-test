import { getXYbyAngle } from "./angleFunctions";

import { LineComponent } from "./LineComponent";

const TurtleComponent = ({ x, y, turn, backgroundColor, borderColor }) => {
  return (
    <LineComponent
      points={[
        ...getXYbyAngle(x, y, 10, -90 + turn),
        ...getXYbyAngle(x, y, 30, turn),
        ...getXYbyAngle(x, y, 10, 90 + turn),
      ]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    />
  );
};

export { TurtleComponent };
