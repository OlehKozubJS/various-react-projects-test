import { useEffect, useState } from "react";

import { getXYbyAngle } from "./angleFunctions";

import { LineComponent } from "./LineComponent";

const ReversedTurtleComponent = ({
  x,
  y,
  onTurn,
  backgroundColor,
  borderColor,
}) => {
  const [angleValue, setAngleValue] = useState(0);
  const [initialAngle, setInitialAngle] = useState(0);
  const [isDraggable, setIsDraggable] = useState(false);

  const getQuantalAngle = (angle, step) => {
    return Math.round(angle / step) * step;
  };

  const calculateCurrentAngle = (event) => {
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    let angle = getAngleByXY(300, 300, cursorX, cursorY);
    if (cursorX < 300) {
      angle = 360 - angle;
    }
    return angle;
  };

  const startMoving = (event) => {
    setIsDraggable(true);
    let newInitialAngle = calculateCurrentAngle(event) - angleValue;
    if (newInitialAngle < 0) {
      newInitialAngle += 360;
    }
    setInitialAngle(newInitialAngle);
  };

  const moveTurtle = (event) => {
    event.preventDefault();

    if (isDraggable) {
      let newAngleValue = calculateCurrentAngle(event) - initialAngle;
      if (newAngleValue < 0) {
        newAngleValue += 360;
      }
      setAngleValue(newAngleValue);
    }
  };

  const stopMoving = () => {
    setIsDraggable(false);
    const quantalAngle = getQuantalAngle(angleValue, 15);
    if (quantalAngle < 0) {
      quantalAngle += 360;
    }
    setAngleValue(quantalAngle);
  };

  useEffect(() => {
    onTurn(angleValue);
  }, [angleValue]);

  return (
    <LineComponent
      points={[
        x,
        y,
        ...getXYbyAngle(x, y, 200, angleValue),
        ...getXYbyAngle(x, y, 200, angleValue + 30),
        x,
        y,
      ]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onMouseDown={startMoving}
      onMouseMove={moveTurtle}
      onMouseUp={stopMoving}
    />
  );
};

export { ReversedTurtleComponent };
