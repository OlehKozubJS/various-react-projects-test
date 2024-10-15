import { useState } from "react";

import { SVGFieldComponent, ArrowComponent } from "./SVGComponents";

const App = () => {
  const [angle, setAngle] = useState(0);

  const handleTurn = (value) => {
    setAngle(value);
  };

  return (
    <div>
      <SVGFieldComponent
        width="600px"
        height="600px"
        backgroundColor="rgb(240, 230, 250)"
      >
        <ArrowComponent
          x={100}
          y={150}
          onTurn={handleTurn}
          backgroundColor={"red"}
          borderColor={"blue"}
        />
      </SVGFieldComponent>
      {`angle value: ${angle}`}
    </div>
  );
};

export { App };

/*



*/
