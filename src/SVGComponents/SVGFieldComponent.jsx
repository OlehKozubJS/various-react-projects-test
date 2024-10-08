const SVGFieldComponent = ({ children, width, height, backgroundColor }) => {
  return (
    <svg
      style={{
        width,
        height,
        backgroundColor,
      }}
    >
      {children}
    </svg>
  );
};

export { SVGFieldComponent };
