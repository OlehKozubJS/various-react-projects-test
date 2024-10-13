const SVGFieldComponent = ({
  children,
  width,
  height,
  backgroundColor,
  onMousedown,
}) => {
  return (
    <svg
      style={{
        width,
        height,
        backgroundColor,
      }}
      onMousedown={onMousedown}
    >
      {children}
    </svg>
  );
};

export { SVGFieldComponent };
