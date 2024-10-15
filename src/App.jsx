import { useEffect, useState } from "react";

import {
  SVGFieldComponent,
  ReversedTurtleComponent,
  getAngleByXY,
} from "./SVGComponents";

const App = () => {
  const [angleValue, setAngleValue] = useState(0);
  const [initialAngle, setInitialAngle] = useState(0);
  const [finalAngle, setFinalAngle] = useState(0);
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

    setInitialAngle(calculateCurrentAngle(event) - angleValue);
  };

  const moveTurtle = (event) => {
    event.preventDefault();

    if (isDraggable) {
      let angle = calculateCurrentAngle(event) - initialAngle;
      if (angle < 0) {
        angle += 360;
      }
      setAngleValue(angle);
    }
  };

  const stopMoving = () => {
    setIsDraggable(false);
    const quantalAngle = getQuantalAngle(angleValue, 45);
    if (quantalAngle < 0) {
      quantalAngle += 360;
    }
    setAngleValue(quantalAngle);
  };

  const resetDefaults = () => {
    setAngleValue(0);
    setInitialAngle(0);
  };

  return (
    <div>
      <SVGFieldComponent
        width="600px"
        height="600px"
        backgroundColor="rgb(240, 230, 250)"
      >
        <ReversedTurtleComponent
          onMouseDown={startMoving}
          onMouseMove={moveTurtle}
          onMouseUp={stopMoving}
          x={300}
          y={300}
          turn={angleValue}
          backgroundColor={"red"}
          borderColor={"blue"}
        />
      </SVGFieldComponent>
      <br />
      <button type="button" onClick={resetDefaults}>
        Reset Defaults
      </button>
      {`angle value: ${angleValue}, 
      initialValue: ${initialAngle},
      isDraggable: ${isDraggable}`}
    </div>
  );
};

export { App };
