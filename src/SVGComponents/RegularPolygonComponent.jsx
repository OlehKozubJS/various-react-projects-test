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
  return polygonString;
  const sinFunc = (angle) => {
    return Math.sin((Math.PI / 180) * angle);
  };

  const cosFunc = (angle) => {
    return Math.cos((Math.PI / 180) * angle);
  };

  function angleFunction(x, y, length, angle) {
    return [x + length * cosFunc(angle), y + l * sinFunc(angle)];
  }

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
