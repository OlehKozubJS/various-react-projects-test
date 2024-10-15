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
