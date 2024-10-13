import { getXYbyAngle } from "./angleFunctions";

import { LineComponent } from "./LineComponent";

const RegularPolygonComponent = ({
  x,
  y,
  length,
  angleNumber,
  angle,
  backgroundColor,
  borderColor,
}) => {
  let polygonArray = [];

  for (
    let amountOfSides = 1;
    amountOfSides <= angleNumber + 1;
    ++amountOfSides
  ) {
    const xy = getXYbyAngle(
      x,
      y,
      length,
      (360 / angleNumber) * amountOfSides + angle
    );
    polygonArray = [...polygonArray, ...xy];
  }

  return (
    <LineComponent
      points={polygonArray}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    />
  );
};

export { RegularPolygonComponent };
