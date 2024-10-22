import css from "./Calculator.module.css";

const CalculatorButton = ({ onClick, children, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      value={children}
      className={`${css.CalculatorButton} ${css[style]}`}
    >
      {children}
    </button>
  );
};

export { CalculatorButton };
