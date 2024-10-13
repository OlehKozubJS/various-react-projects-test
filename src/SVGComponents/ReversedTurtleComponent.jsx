import { angleFunction } from "./angleFunctions";

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
        ...angleFunction(x, y, 100, -15 + turn),
        ...angleFunction(x, y, 0, turn),
        ...angleFunction(x, y, 100, 15 + turn),
        ...angleFunction(x, y, 100, -15 + turn),
      ]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    />
  );
};

export { ReversedTurtleComponent };
