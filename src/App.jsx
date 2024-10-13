import { useState } from "react";

import {
  SVGFieldComponent,
  LineComponent,
  ReversedTurtleComponent,
} from "./SVGComponents";

const App = () => {
  let horizontalCoordinates = [];

  for (let x = 0; x <= 1000; x += 10) {
    horizontalCoordinates = [...horizontalCoordinates, x];
  }

  const [angleValue, setAngleValue] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [isDraggable, setIsDraggable] = useState(0);

  return (
    <>
      <SVGFieldComponent
        width="1000px"
        height="1000px"
        backgroundColor="rgb(240, 230, 250)"
      >
        <LineComponent
          points={[100, 0, 100, 100]}
          backgroundColor="blue"
          borderColor="red"
        />
      </SVGFieldComponent>
    </>
  );
};

export { App };
