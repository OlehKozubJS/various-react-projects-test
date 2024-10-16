import { useState } from "react";

import {
  SVGFieldComponent,
  ArrowComponent,
  GridComponent,
  Parable,
} from "./SVGComponents";

const App = () => {
  const [isArrowComponent, setIsArrowComponent] = useState(false);
  const openArrowComponent = () => {
    setIsArrowComponent(true);
  };
  const closeArrowComponent = () => {
    setIsArrowComponent(false);
  };
  const [angle, setAngle] = useState(0);
  const handleTurn = (value) => {
    setAngle(value);
  };

  const scale = 60;

  return (
    <div>
      <SVGFieldComponent
        width="600px"
        height="600px"
        backgroundColor="rgb(240, 230, 250)"
      >
        {isArrowComponent && (
          <ArrowComponent
            x={300}
            y={300}
            onTurn={handleTurn}
            backgroundColor={"red"}
            borderColor={"blue"}
          />
        )}
        <GridComponent
          cellHeight={scale / 10}
          cellWidth={scale / 10}
          fieldHeight={600}
          fieldWidth={600}
          color="rgb(150, 150, 200)"
        />
        <GridComponent
          cellHeight={scale}
          cellWidth={scale}
          fieldHeight={600}
          fieldWidth={600}
          color="rgb(100, 100, 200)"
        />
        <Parable scale={scale} />
      </SVGFieldComponent>
      <br />
      <button
        type="button"
        onClick={isArrowComponent ? closeArrowComponent : openArrowComponent}
      >
        {isArrowComponent ? "close arrow component" : "open arrow component"}
      </button>
      {isArrowComponent && `angle value: ${angle}`}
    </div>
  );
};

export { App };

/*



*/
