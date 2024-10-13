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
        <LineComponent
          points={[0, 0, 50, 50, 100, 50, 50, 0]}
          backgroundColor={"blue"}
          borderColor={"red"}
        />
        <RadiantLineComponent
          x={150}
          y={150}
          length={150}
          angle={120}
          backgroundColor={"none"}
          borderColor={"rgb(200, 180, 120)"}
        />
        <RegularPolygonComponent
          x={35}
          y={30}
          length={25}
          angle={170}
          angleNumber={3}
          backgroundColor={"cyan"}
          borderColor={"rgb(200, 100, 180)"}
        />
        <TurtleComponent
          x={215}
          y={230}
          turn={0}
          backgroundColor={"rgb(60, 60, 70)"}
          borderColor={"rgb(30, 30, 70)"}
        />
      </SVGFieldComponent>
    </>
  );
};

export { App };
