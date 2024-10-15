import { useState } from "react";

import {
  SVGFieldComponent,
  ReversedTurtleComponent,
  getLengthByXY,
  getAngleByXY,
} from "./SVGComponents";

const App = () => {
  const angle = 0;
  const [angleValue, setAngleValue] = useState(0);
  const [initialAngle, setInitialAngle] = useState(0);
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
    const newInitialAngle = calculateCurrentAngle(event);
    setInitialAngle(newInitialAngle);
  };

  const moveTurtle = (event) => {
    event.preventDefault();

    if (!isDraggable) {
      return;
    }

    const finalAngle = calculateCurrentAngle(event);
    const newAngleValue = -angleValue + initialAngle - finalAngle;
    setAngleValue(newAngleValue);
  };

  const stopMoving = () => {
    setIsDraggable(false);
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
      {angleValue}
    </div>
  );
};

export { App };
