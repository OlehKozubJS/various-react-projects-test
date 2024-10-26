import { useEffect, useState } from "react";

import { insertCharacter, deleteCharacter } from "./character_functions";

import { NumberKeyBoard } from "./NumberKeyBoard";
import { ActionsKeyBoard } from "./ActionsKeyBoard";
import { MainControlsKeyBoard } from "./MainControlsKeyBoard";
import { CalculatorDisplay } from "./CalculatorDisplay";

import css from "./Calculator.module.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [cursorIndex, setCursorIndex] = useState(0);

  const enterData = (value) => {
    setResult("");
    setExpression(insertCharacter(expression, cursorIndex, value));
    setCursorIndex(cursorIndex + 1);
  };

  const calculate = () => {
    setResult("=" + eval(expression));
    setCursorIndex(expression.length);
  };

  const backSpace = () => {
    if (result) {
      setResult("");
    } else {
      setExpression(deleteCharacter(expression, cursorIndex - 1));
      turnCursorLeft();
    }
  };

  const clear = () => {
    setExpression("");
    setResult("");
    setCursorIndex(0);
  };

  const turnCursor = (newCursorIndex) => {
    if (result) {
      return;
    }
    setCursorIndex(newCursorIndex);
  };

  return (
    <div className={css.Calculator}>
      <CalculatorDisplay
        expression={expression}
        cursorIndex={cursorIndex}
        result={result}
      />
      <div className={`${css.KeyBoard} ${css.CalculatorKeyBoard}`}>
        <NumberKeyBoard onClick={enterData} backSpace={backSpace} />

        <div className={`${css.KeyBoard} ${css.CommonKeyBoard}`}>
          <ActionsKeyBoard onClick={enterData} />

          <MainControlsKeyBoard
            calculate={calculate}
            cursorIndex={cursorIndex}
            turnCursor={turnCursor}
            clear={clear}
          />
        </div>
      </div>
    </div>
  );
};

export { Calculator };
