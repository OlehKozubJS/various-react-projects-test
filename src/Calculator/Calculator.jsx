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

  const enterData = (event) => {
    setResult("");
    setCharacter(event.target.value);
  };

  const enterNKdata = (value) => {
    setResult("");
    setCharacter(value);
  };

  const calculate = () => {
    setResult("=" + eval(expression));
  };

  const backSpace = () => {
    if (result) {
      setResult("");
    } else {
      setExpression(deleteCharacter(expression, expression.length - 1));
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
    if (cursorIndex < expression.length || cursorIndex === 0) {
      setCursorIndex(cursorIndex + 1);
    }
  };

  useEffect(() => {
    setExpression(insertCharacter(expression, cursorIndex - 1, character));
    turnCursorRight();
  }, [character]);

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
        <NumberKeyboard onClick={enterNKdata} backSpace={enterData} />
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
            Left
          </button>
          <button type="button" onClick={turnCursorRight}>
            Right
          </button>
        </div>
      </div>
    </>
  );
};

export { Calculator };
