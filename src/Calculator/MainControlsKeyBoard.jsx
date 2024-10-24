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
      <CalculatorButton onClick={calculate} style="MainControlButton">
        =
      </CalculatorButton>
      <CalculatorButton onClick={turnCursorUp} style="MainControlButton">
        ↑
      </CalculatorButton>
      <CalculatorButton onClick={clear} style="MainControlButton">
        C
      </CalculatorButton>
      <CalculatorButton onClick={turnCursorLeft} style="MainControlButton">
        ←
      </CalculatorButton>
      <CalculatorButton onClick={turnCursorDown} style="MainControlButton">
        ↓
      </CalculatorButton>
      <CalculatorButton onClick={turnCursorRight} style="MainControlButton">
        →
      </CalculatorButton>
    </div>
  );
};

export { MainControlsKeyBoard };
