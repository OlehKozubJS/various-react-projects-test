import { getXYbyAngle } from "./angleFunctions";

import { LineComponent } from "./LineComponent";

const ReversedTurtleComponent = ({
  x,
  y,
  turn,
  backgroundColor,
  borderColor,
  onMouseDown,
  onMouseMove,
  onMouseUp,
}) => {
  return (
    <LineComponent
      points={[
        x,
        y,
        ...getXYbyAngle(x, y, 80, turn),
        ...getXYbyAngle(x, y, 100, turn + 30),
        x,
        y,
      ]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    />
  );
};

export { ReversedTurtleComponent };
