import css from "./Calculator.module.css";

const CalculatorButton = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      value={children}
      className={css.CalculatorButton}
    >
      {children}
    </button>
  );
};
