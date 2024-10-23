import { CalculatorButton } from "./CalculatorButton";

import css from "./Calculator.module.css";

const MainControlsKeyBoard = ({
  calculate,
  turnCursorUp,
  clear,
  turnCursorLeft,
  turnCursorDown,
  turnCursorRight,
}) => {
  return (
    <div className={`${css.KeyBoard} ${css.ActionsKeyBoard}`}>
      <CalculatorButton onClick={calculate}>=</CalculatorButton>
      <CalculatorButton onClick={turnCursorUp}>↑</CalculatorButton>
      <CalculatorButton onClick={clear}>C</CalculatorButton>
      <CalculatorButton onClick={turnCursorLeft}>←</CalculatorButton>
      <CalculatorButton onClick={turnCursorRight}>→</CalculatorButton>
      <CalculatorButton onClick={turnCursorDown}>↓</CalculatorButton>
    </div>
  );
};

export { MainControlsKeyBoard };
