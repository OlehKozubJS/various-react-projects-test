const SVGFieldComponent = ({
  children,
  width,
  height,
  backgroundColor,
  onMouseDown,
}) => {
  return (
    <svg
      style={{
        width,
        height,
        backgroundColor,
      }}
      onMouseDown={onMouseDown}
    >
      {children}
    </svg>
  );
};

export { SVGFieldComponent };
