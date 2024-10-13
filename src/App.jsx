import { angleFunction } from "./SVGComponents/angleFunctions";

import {
  SVGFieldComponent,
  LineComponent,
  RadiantLineComponent,
  RegularPolygonComponent,
  TurtleComponent,
} from "./SVGComponents";

const App = () => {
  let horizontalCoordinates = [];

  for (let x = 0; x <= 1000; x += 10) {
    horizontalCoordinates = [...horizontalCoordinates, x];
  }

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
