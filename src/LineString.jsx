const LineString = ({ x1, y1, x2, y2 }) => {
  return <polyline points={`${x1} ${y1} ${x2} ${y2}`}></polyline>;
};

export { LineString };
