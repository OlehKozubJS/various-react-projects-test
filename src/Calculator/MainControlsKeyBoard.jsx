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
  const turnCursorLeft = () => {
    if (!result && cursorIndex > 0) {
      setCursorIndex(cursorIndex - 1);
    }
  };

  const turnCursorRight = () => {
    if (!result && cursorIndex < expression.length) {
      setCursorIndex(cursorIndex + 1);
    }
  };

  const turnCursorUp = () => {
    if (!result && cursorIndex - 20 >= 0) {
      setCursorIndex(cursorIndex - 22);
    }
  };

  const turnCursorDown = () => {
    if (!result && cursorIndex + 20 <= expression.length) {
      setCursorIndex(cursorIndex + 22);
    }
  };

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
