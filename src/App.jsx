import { useState } from "react";

import {
  SVGFieldComponent,
  LineComponent,
  ReversedTurtleComponent,
  GridComponent,
  sinFunc,
  cosFunc,
  getLengthByXY,
} from "./SVGComponents";

const App = () => {
  const angle = 0;
  const [angleValue, setAngleValue] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [isDraggable, setIsDraggable] = useState(false);

  return (
    <>
      <SVGFieldComponent
        width="600px"
        height="600px"
        backgroundColor="rgb(240, 230, 250)"
      >
        <ReversedTurtleComponent
          x={300}
          y={300}
          turn={0}
          backgroundColor={"red"}
          borderColor={"blue"}
        />
      </SVGFieldComponent>
      {getLengthByXY(34, 48, 64, 88)}
    </>
  );
};

export { App };

/**
 <LineComponent
    points={[100, 0, 100, 100]}
    backgroundColor="blue"
    borderColor="red"
  />

  <LineComponent
    points={[0, 200, 100 * sinFunc(angle), 200 + 100 * cosFunc(angle)]}
    backgroundColor="blue"
    borderColor="red"
  />
 */
