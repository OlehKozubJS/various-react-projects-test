const LineComponent = ({
  points,
  backgroundColor,
  borderColor,
  onMouseDown,
  onMouseMove,
  onMouseUp,
}) => {
  return (
    <polyline
      points={points.join(" ")}
      fill={backgroundColor}
      stroke={borderColor}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    ></polyline>
  );
};

export { LineComponent };
