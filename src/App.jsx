import { useState } from "react";

import { SVGFieldComponent, LineComponent } from "./SVGComponents";

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
        {horizontalCoordinates.map((item) => {
          return (
            <>
              <LineComponent
                key={item}
                points={[item, 0, item, 1000]}
                backgroundColor="blue"
                borderColor="red"
              />
              <LineComponent
                key={item}
                points={[0, item, 1000, item]}
                backgroundColor="blue"
                borderColor="red"
              />
            </>
          );
        })}
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
