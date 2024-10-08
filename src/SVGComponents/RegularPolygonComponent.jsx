import { angleFunction } from "./angleFunctions";

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

  for (let aa = 1; aa <= angleNumber + 1; ++aa) {
    const xy = angleFunction(x, y, length, (360 / angleNumber) * aa + angle);
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
