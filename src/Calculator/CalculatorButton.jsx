const CalculatorButton = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} value={children}>
      {children}
    </button>
  );
};
