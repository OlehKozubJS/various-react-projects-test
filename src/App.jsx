import { angleFunction } from "./SVGComponents/angleFunctions";

import {
  SVGFieldComponent,
  LineComponent,
  RadiantLineComponent,
  RegularPolygonComponent,
  TurtleComponent,
} from "./SVGComponents";

const App = () => {
  return (
    <>
      <SVGFieldComponent
        width="1000px"
        height="1000px"
        backgroundColor="rgb(240, 230, 250)"
      >
        {
          for(let x = 0; x <= 300; x++) 
        {return (<LineComponent
          points={[x, 0, x, 300]}
          backgroundColor="blue"
          borderColor="red"
        />);}
        }
        <LineComponent
          points={[100, 0, 100, 100]}
          backgroundColor="blue"
          borderColor="red"
        />
        <RadiantLineComponent
          x={150}
          y={150}
          length={150}
          angle={0}
          backgroundColor="none"
          borderColor="rgb(200, 180, 120)"
        />
        <RegularPolygonComponent
          x={100}
          y={100}
          length={25}
          angle={15}
          angleNumber={3}
          backgroundColor="cyan"
          borderColor="rgb(200, 100, 180)"
        />
        <TurtleComponent
          x={215}
          y={230}
          turn={0}
          backgroundColor="rgb(90, 90, 170)"
          borderColor="rgb(30, 30, 170)"
        />
      </SVGFieldComponent>
    </>
  );
};

export { App };
