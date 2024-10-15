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

  const calculateCurrentAngle = (event) => {
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const angle = getAngleByXY(300, 300, cursorX, cursorY);
    if (cursorX >= 300) {
      return angle;
    } else {
      return 360 - angle;
    }
  };

  const startMoving = (event) => {
    setIsDraggable(true);

    setInitialAngle(calculateCurrentAngle(event));
  };

  const moveTurtle = (event) => {
    event.preventDefault();

    if (isDraggable) {
      setFinalAngle(calculateCurrentAngle(event));
    }
  };

  const stopMoving = () => {
    setIsDraggable(false);
    console.log("stopped!");
  };

  useEffect(() => {
    setAngleValue(angleValue + finalAngle - initialAngle);
  }, [finalAngle]);

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
