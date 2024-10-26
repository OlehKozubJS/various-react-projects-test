import { CalculatorButton } from "./CalculatorButton";

import css from "./Calculator.module.css";

const MainControlsKeyBoard = ({
  calculate,
  cursorIndex,
  turnCursor,
  clear,
}) => {
  const turnCursorLeft = () => {
    if (cursorIndex > 0) {
      turnCursor(cursorIndex - 1);
    }
  };

  const turnCursorRight = () => {
    if (cursorIndex < expression.length) {
      turnCursor(cursorIndex + 1);
    }
  };

  const turnCursorUp = () => {
    if (cursorIndex - 20 >= 0) {
      turnCursor(cursorIndex - 22);
    }
  };

  const turnCursorDown = () => {
    if (cursorIndex + 20 <= expression.length) {
      turnCursor(cursorIndex + 22);
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
