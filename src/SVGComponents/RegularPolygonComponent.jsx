const RegularPolygonComponent = ({
  x,
  y,
  l,
  angleNumber,
  angle,
  backgroundColor,
  borderColor,
}) => {
  var polygonArray = [];
  for (aa = 1; aa <= angleNumber; ++aa) {
    var xy = angleFunction(x, y, l, (360 / angleNumber) * aa + angle);
    polygonArray.push(xy);
  }
  var polygonString =
    "<polygon points='" + polygonArray.join(",") + "'></polygon>";

  return (
    <LineComponent
      points={[
        x,
        y,
        angleFunction(x, y, length, angle)[0],
        angleFunction(x, y, length, angle)[1],
      ]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    />
  );
};

export { RegularPolygonComponent };
