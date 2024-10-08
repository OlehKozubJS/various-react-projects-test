import { angleFunction } from "./angleFunctions";

import { LineComponent } from "./LineComponent";

const TurtleComponent = ({ x, y, turn, backgroundColor, borderColor }) => {
  return (
    <LineComponent
      points={[
        ...angleFunction(x, y, 10, -90 + turn),
        ...angleFunction(x, y, 30, turn),
        ...angleFunction(x, y, 10, 90 + turn),
      ]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    />
  );
};

export { TurtleComponent };
