import { useState } from "react";

import { SVGFieldComponent, ArrowComponent } from "./SVGComponents";

const App = () => {
  return (
    <div>
      <SVGFieldComponent
        width="600px"
        height="600px"
        backgroundColor="rgb(240, 230, 250)"
      ></SVGFieldComponent>
    </div>
  );
};

export { App };

/*
  const [angle, setAngle] = useState(0);

  const handleTurn = (value) => {
    setAngle(value);
  };


        <ArrowComponent
          x={100}
          y={150}
          onTurn={handleTurn}
          backgroundColor={"red"}
          borderColor={"blue"}
        />
        
      {`angle value: ${angle}`}    
*/
