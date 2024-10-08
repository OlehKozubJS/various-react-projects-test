const LineComponent = ({ points, backgroundColor, borderColor }) => {
  return (
    <polyline
      points={points.join(" ")}
      fill={backgroundColor}
      stroke={borderColor}
    ></polyline>
  );
};

export { LineComponent };
