const RegularPolygonComponent = ({
  x,
  y,
  length,
  angleNumber,
  angle,
  backgroundColor,
  borderColor,
}) => {
  const polygonArray = [];

  for (aa = 1; aa <= angleNumber; ++aa) {
    const xy = angleFunction(x, y, length, (360 / angleNumber) * aa + angle);
    polygonArray.push(xy);
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
