import { useState } from "react";

import {
  SVGFieldComponent,
  LineComponent,
  ReversedTurtleComponent,
  sinFunc,
  cosFunc,
} from "./SVGComponents";

const App = () => {
  let horizontalCoordinates = [];

  for (let x = 0; x <= 1000; x += 10) {
    horizontalCoordinates = [...horizontalCoordinates, x];
  }
  const angle = 0;
  const [angleValue, setAngleValue] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [isDraggable, setIsDraggable] = useState(false);

  return (
    <>
      <SVGFieldComponent
        width="1000px"
        height="1000px"
        backgroundColor="rgb(240, 230, 250)"
      >
        <ReversedTurtleComponent
          x={500}
          y={500}
          turn={0}
          backgroundColor={"red"}
          borderColor={"blue"}
        />
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
      </SVGFieldComponent>
    </>
  );
};

export { App };
