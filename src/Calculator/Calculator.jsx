import { useEffect, useState } from "react";

import { NumberKeyboard } from "./NumberKeyBoard";

import {
  insertCharacter,
  deleteCharacter,
  replaceCharacter,
} from "./character_functions";

import css from "./Calculator.module.css";

const Calculator = () => {
  const [character, setCharacter] = useState();
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [expressionAndCursor, setExpressionAndCursor] = useState("");
  const [cursorIndex, setCursorIndex] = useState(0);

  const enterData = (value) => {
    setResult("");
    setExpression(insertCharacter(value, cursorIndex));
  };

  const enterNKdata = (value) => {
    setResult("");
    setExpression(insertCharacter(expression, cursorIndex, value));
    setCursorIndex(cursorIndex + 1);
  };

  const calculate = () => {
    setResult("=" + eval(expression));
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

  const turnCursorLeft = () => {
    if (cursorIndex > 0) {
      setCursorIndex(cursorIndex - 1);
    }
  };

  const turnCursorRight = () => {
    if (cursorIndex < expression.length) {
      setCursorIndex(cursorIndex + 1);
    }
  };

  useEffect(() => {
    setExpressionAndCursor(
      insertCharacter(expression, cursorIndex, result ? "" : "_")
    );
  }, [expression, cursorIndex, result]);

  return (
    <>
      <div>
        {expressionAndCursor}
        {result}
      </div>
      <div>{cursorIndex}</div>
      <div>
        <NumberKeyboard onClick={enterNKdata} backSpace={backSpace} />
        <div>
          <button type="button" onClick={enterData} value="(">
            {"("}
          </button>
          <button type="button" onClick={enterData} value=")">
            {")"}
          </button>
          <button type="button" onClick={enterData} value="+">
            +
          </button>
          <button type="button" onClick={enterData} value="-">
            -
          </button>
          <button type="button" onClick={enterData} value="*">
            *
          </button>
          <button type="button" onClick={enterData} value="/">
            /
          </button>
          <button type="button" onClick={calculate}>
            =
          </button>
          <button type="button" onClick={clear}>
            C
          </button>
          <button type="button" onClick={turnCursorLeft}>
            ←
          </button>
          <button type="button" onClick={turnCursorRight}>
            →
          </button>
        </div>
      </div>
    </>
  );
};

export { Calculator };